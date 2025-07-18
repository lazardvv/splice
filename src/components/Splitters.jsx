import React from 'react';

const Splitters = () => {
  const splitterData = [];

  let splitter2to4 = 1;
  let splitter1to8 = 1;
  let splitterOut = 1;

  for (let i = 1; i <= 128; i++) {
    splitterData.push({
      cassetteNumber: Math.ceil(i / 12),
      addressId: `ADDR-${i}`,
      fiberNumber: i,
      splitter2to4,
      splitter1to8: `${splitter2to4}.${splitter1to8}`,
      splitterOut: `OUT${splitterOut}`
    });

    splitterOut++;
    if (splitterOut > 8) {
      splitterOut = 1;
      splitter1to8++;
      if (splitter1to8 > 4) {
        splitter1to8 = 1;
        splitter2to4++;
      }
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Splitter Port Assignments</h2>
      <div className="overflow-y-auto max-h-[600px] border border-gray-300 rounded">
        <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              {['Cassette', 'Address ID', 'Fiber #', '2:4 Splitter', '1:8 Splitter', 'Output'].map((header) => (
                <th key={header} className="border border-gray-400 px-2 py-1 text-left bg-gray-100">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {splitterData.map((entry, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-2 py-1">{entry.cassetteNumber}</td>
                <td className="border border-gray-300 px-2 py-1">{entry.addressId}</td>
                <td className="border border-gray-300 px-2 py-1">{entry.fiberNumber}</td>
                <td className="border border-gray-300 px-2 py-1">{entry.splitter2to4}</td>
                <td className="border border-gray-300 px-2 py-1">{entry.splitter1to8}</td>
                <td className="border border-gray-300 px-2 py-1">{entry.splitterOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Splitters;