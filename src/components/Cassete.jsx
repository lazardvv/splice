import React, { useState, useEffect } from 'react';
import { adresses } from '../constants';

const Cassette = ({ index, setSplicedAddresses }) => {
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
        splitter1to4: '',
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

    // Handle 24 fibers (requires 2 full cassettes)
    if (fiberCount === 24) {
      const freeCassettes = updatedCassettes.filter(cassette =>
        cassette.ports.every(p => !p.isUsed)
      );

      if (freeCassettes.length >= 2) {
        let fiberNum = 1;
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 12; j++) {
            freeCassettes[i].ports[j] = {
              ...freeCassettes[i].ports[j],
              isUsed: true,
              ...address,
              fiberNumber: fiberNum++
            };
          }
        }
        setCassettes(updatedCassettes);
        setSplicedAddresses(prev => [...new Set([...prev, address.id])]);
        return;
      } else {
        alert('Not enough space for 24 fibers (requires 2 free cassettes).');
        return;
      }
    }

    // Handle 12 fibers
    for (let c = 0; c < updatedCassettes.length; c++) {
      const cassette = updatedCassettes[c];

      if (fiberCount === 12 && cassette.ports.every(p => !p.isUsed)) {
        for (let i = 0; i < 12; i++) {
          cassette.ports[i] = {
            ...cassette.ports[i],
            isUsed: true,
            ...address,
            fiberNumber: i + 1
          };
        }
        setCassettes(updatedCassettes);
        setSplicedAddresses(prev => [...new Set([...prev, address.id])]);
        return;
      }

      // Handle <= 6 fibers
      const firstHalf = cassette.ports.slice(0, 6);
      const secondHalf = cassette.ports.slice(6, 12);

      if (fiberCount <= 6 && firstHalf.every(p => !p.isUsed)) {
        for (let i = 0; i < fiberCount; i++) {
          cassette.ports[i] = {
            ...cassette.ports[i],
            isUsed: true,
            ...address,
            fiberNumber: i + 1
          };
        }
        setCassettes(updatedCassettes);
        setSplicedAddresses(prev => [...new Set([...prev, address.id])]);
        return;
      }

      if (fiberCount <= 6 && secondHalf.every(p => !p.isUsed)) {
        for (let i = 6; i < 6 + fiberCount; i++) {
          cassette.ports[i] = {
            ...cassette.ports[i],
            isUsed: true,
            ...address,
            fiberNumber: i - 5
          };
        }
        setCassettes(updatedCassettes);
        setSplicedAddresses(prev => [...new Set([...prev, address.id])]);
        return;
      }
    }

    alert('No space available for this address.');
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-red-400 p-2 rounded-full text-white hover:bg-gray-200"
          onClick={handleAddToCassette}
        >
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
        'Cable Length', 'Fiber Number', 'splitter1to2', 'splitter1to4', 'splitterOut1to8', 'Splice'
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
        <td className="border border-gray-300 px-2 py-1">{port.splitter1to4}</td>
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