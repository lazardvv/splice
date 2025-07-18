import React from 'react';
import { adresses } from '../constants';

const AdressesList = ({ index, setIndex, splicedAddresses }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">All Addresses</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Street</th>
            <th>Street No.</th>
            <th>Postal Code</th>
            <th>District</th>
            <th>Users</th>
            <th>Tube Nr</th>
            <th>Tube Type</th>
            <th>MicroTube Nr</th>
            <th>Cable Length</th>
            <th>Fibers</th>
          </tr>
        </thead>
        <tbody>
          {adresses.map((addr, i) => {
            const isCurrent = i === index;
            const isSpliced = splicedAddresses.includes(addr.id);

            let rowClass = 'bg-white cursor-pointer';
            if (isSpliced) rowClass = 'bg-green-200 cursor-pointer';
            if (isCurrent) rowClass = 'bg-yellow-200 font-semibold cursor-pointer';
            if (isSpliced && isCurrent) rowClass = 'bg-blue-200 font-bold cursor-pointer';

            return (
              <tr
                key={addr.id}
                className={`${rowClass} border border-gray-300 hover:bg-gray-100`}
                onClick={() => setIndex(i)}
              >
                <td className="border px-2 py-1">
                  {isSpliced ? 'Spliced' : isCurrent ? 'Selected' : ''}
                </td>
                <td className="border px-2 py-1">{addr.id}</td>
                <td className="border px-2 py-1">{addr.street}</td>
                <td className="border px-2 py-1">{addr.streetNumber}</td>
                <td className="border px-2 py-1">{addr.postalCode}</td>
                <td className="border px-2 py-1">{addr.district}</td>
                <td className="border px-2 py-1">{addr.users}</td>
                <td className="border px-2 py-1">{addr.tubeNr}</td>
                <td className="border px-2 py-1">{addr.tubeType}</td>
                <td className="border px-2 py-1">{addr.microTubeNr}</td>
                <td className="border px-2 py-1">{addr.cableLength}</td>
                <td className="border px-2 py-1">{addr.fibers}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdressesList;