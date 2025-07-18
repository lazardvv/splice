import React, { useState, useEffect } from 'react';
import { adresses } from '../constants';

const Cassette = ({ index, setSplicedAddresses, port, setPort, ignoreOut8 }) => {
  const [cassettes, setCassettes] = useState(
    Array.from({ length: 48 }, (_, cassetteIndex) => ({
      id: cassetteIndex + 1,
      ports: Array.from({ length: 12 }, (_, portIndex) => ({
        port: portIndex + 1,
        isUsed: false,
        id: '',
        street: '',
        streetNumber: '',
        postalCode: '',
        district: '',
        users: '',
        tubeNr: '',
        tubeType: '',
        microTubeNr: '',
        cableLength: '',
        fiberNumber: null,
        splitter1to2: '',
        splitter1to8: '',
        splitterOut1to8: '',
        Splice: ''
      }))
    }))
  );

  const [hasSpace, setHasSpace] = useState(true);

  useEffect(() => {
    const address = adresses[index];
    if (!address) return;

    const fiberCount = address.fibers;
    let spaceFound = false;

    for (const cassette of cassettes) {
      const firstHalf = cassette.ports.slice(0, 6);
      const secondHalf = cassette.ports.slice(6, 12);

      if (fiberCount === 12 && cassette.ports.every(p => !p.isUsed)) {
        spaceFound = true;
        break;
      }

      if (fiberCount <= 6 && firstHalf.every(p => !p.isUsed)) {
        spaceFound = true;
        break;
      }

      if (fiberCount <= 6 && secondHalf.every(p => !p.isUsed)) {
        spaceFound = true;
        break;
      }
    }

    setHasSpace(spaceFound);
  }, [index, cassettes]);

  const handleAddToCassette = () => {
    const address = adresses[index];
    if (!address) return;

    const fiberCount = address.fibers;
    const updatedCassettes = [...cassettes];
    let cassetteAllocated = false;
    let usedFiberNumbers = [];

    // 1. Allocate cassette space
    if (fiberCount === 24) {
      const freeCassettes = updatedCassettes.filter(c =>
        c.ports.every(p => !p.isUsed)
      );

      if (freeCassettes.length >= 2) {
        let fiberNum = 1;
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 12; j++) {
            freeCassettes[i].ports[j] = {
              ...freeCassettes[i].ports[j],
              isUsed: true,
              ...address,
              id: address.id,
              fiberNumber: fiberNum++
            };
          }
        }
        cassetteAllocated = true;
      }
    }

    if (!cassetteAllocated && fiberCount === 12) {
      for (let cassette of updatedCassettes) {
        if (cassette.ports.every(p => !p.isUsed)) {
          for (let i = 0; i < 12; i++) {
            cassette.ports[i] = {
              ...cassette.ports[i],
              isUsed: true,
              ...address,
              id: address.id,
              fiberNumber: i + 1
            };
          }
          cassetteAllocated = true;
          break;
        }
      }
    }

    if (!cassetteAllocated && fiberCount <= 6) {
      for (let cassette of updatedCassettes) {
        const firstHalf = cassette.ports.slice(0, 6);
        const secondHalf = cassette.ports.slice(6, 12);

        if (firstHalf.every(p => !p.isUsed)) {
          for (let i = 0; i < fiberCount; i++) {
            cassette.ports[i] = {
              ...cassette.ports[i],
              isUsed: true,
              ...address,
              id: address.id,
              fiberNumber: i + 1
            };
          }
          cassetteAllocated = true;
          break;
        }

        if (secondHalf.every(p => !p.isUsed)) {
          for (let i = 6; i < 6 + fiberCount; i++) {
            cassette.ports[i] = {
              ...cassette.ports[i],
              isUsed: true,
              ...address,
              id: address.id,
              fiberNumber: i - 5
            };
          }
          cassetteAllocated = true;
          break;
        }
      }
    }

    if (!cassetteAllocated) {
      alert('No space available in cassettes.');
      return;
    }

    // Save cassette state
    setCassettes(updatedCassettes);
    setSplicedAddresses(prev => [...new Set([...prev, address.id])]);

    // 2. Allocate splitter ports
    setPort(prevPorts => {
      const updatedPorts = prevPorts.map(p => ({ ...p }));
      const grouped = updatedPorts.reduce((acc, port, i) => {
        if (!acc[port.splitter1to2ID]) acc[port.splitter1to2ID] = [];
        acc[port.splitter1to2ID].push({ ...port, index: i });
        return acc;
      }, {});

      const usersNeeded = address.users;
      const fiberIndexes = Array.from({ length: usersNeeded }, (_, i) => i * 2 + 1); // 1,3,5...

      let matchedFibers = [];

      for (const splitterID in grouped) {
        const freePorts = grouped[splitterID].filter(p => {
          const isOut8 = p.splitterOut === 'OUT8';
          return !p.used && (!ignoreOut8 || !isOut8);
        });

        if (freePorts.length >= usersNeeded) {
          let count = 0;
          for (let i = 0; i < updatedPorts.length; i++) {
            const p = updatedPorts[i];
            const isOut8 = p.splitterOut === 'OUT8';

            if (
              p.splitter1to2ID === splitterID &&
              !p.used &&
              (!ignoreOut8 || !isOut8) &&
              count < usersNeeded
            ) {
              const fiberNumber = fiberIndexes[count];
              updatedPorts[i] = {
                ...p,
                used: true,
                fiberNumber,
                cassetteID: null,
                fiberNr: null
              };
              matchedFibers.push({
                splitterIndex: i,
                fiberNumber
              });
              count++;
            }
          }
          break;
        }
      }

      // 3. Sync splitter info into cassette rows (only for this address)
      for (const cassette of updatedCassettes) {
        for (const port of cassette.ports) {
          if (port.isUsed && port.id === address.id) {
            const match = matchedFibers.find(
              m => m.fiberNumber === port.fiberNumber
            );
            if (match) {
              const splitterPort = updatedPorts[match.splitterIndex];
              port.splitter1to2 = splitterPort.splitter1to2ID;
              port.splitter1to8 = splitterPort.splitter1to8;
              port.splitterOut1to8 = splitterPort.splitterOut;

              updatedPorts[match.splitterIndex].cassetteID = cassette.id;
              updatedPorts[match.splitterIndex].fiberNr = port.fiberNumber;
            }
          }
        }
      }

      return updatedPorts;
    });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-red-400 p-2 rounded-full text-white hover:bg-gray-200"
          onClick={handleAddToCassette}>
          Add address
        </button>
        <p className="text-xl">
          {hasSpace ? 'There is space in a cassette' : 'No space available'}
        </p>
      </div>

      {cassettes.map((cassette) => (
        <div key={cassette.id} className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Cassette {cassette.id}</h2>
          <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                {[
                  'Port', 'Status', 'ID', 'Street', 'Street No.', 'Postal Code',
                  'District', 'Users', 'Tube Nr', 'Tube Type', 'MicroTube Nr',
                  'Cable Length', 'Fiber Number', 'Splitter 2:4', 'Splitter 1:8', 'Splitter OUT', 'Splice'
                ].map((header) => (
                  <th key={header} className="border border-gray-400 px-2 py-1 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cassette.ports.map((port) => (
                <tr key={`${cassette.id}-${port.port}`} className={port.isUsed ? 'bg-red-100' : 'bg-green-100'}>
                  <td className="border border-gray-300 px-2 py-1">{port.port}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.isUsed ? 'Used' : 'Free'}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.id}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.street}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.streetNumber}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.postalCode}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.district}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.users}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.tubeNr}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.tubeType}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.microTubeNr}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.cableLength}</td>
                  <td className={`border px-2 py-1 fiber-${port.fiberNumber ?? ''}`}>{port.fiberNumber ?? ''}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.splitter1to2}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.splitter1to8}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.splitterOut1to8}</td>
                  <td className="border border-gray-300 px-2 py-1">{port.Splice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Cassette;
