import React from 'react'
import { useState } from 'react';

const SpliterTest = ({ need, port, setPort, ignoreOut8, setIgnoreOut8  }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const portsPerPage = 8;
  const indexOfLastPort = currentPage * portsPerPage;
  const indexOfFirstPort = indexOfLastPort - portsPerPage;
  const currentPorts = port.slice(indexOfFirstPort, indexOfLastPort);

  const totalPages = Math.ceil(port.length / portsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
<button
  onClick={() => setIgnoreOut8(prev => !prev)}
  style={{
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: ignoreOut8 ? '#ff4d4f' : '#4caf50',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }}
>
  {ignoreOut8 ? 'Ignoring OUT8 Ports' : 'Using All Ports'}
</button>
      
      <h2>Splitter Port Table</h2>
   <table style={{ borderCollapse: 'collapse', width: '80%', textAlign: 'center' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={thStyle}>splitter1to2ID</th>
      <th style={thStyle}>splitter1to8</th>
      <th style={thStyle}>splitterOut</th>
      <th style={thStyle}>cassetteID</th>
      <th style={thStyle}>fiberNr</th>
      <th style={thStyle}>fullID</th>
      <th style={thStyle}>used</th>
    </tr>
  </thead>
  <tbody>
    {currentPorts.map((port, index) => (
      <tr
        key={index}
        style={port.used ? { backgroundColor: '#000', color: '#fff' } : {}}
      >
        <td style={tdStyle}>{port.splitter1to2ID}</td>
        <td style={tdStyle}>{port.splitter1to8}</td>
        <td style={tdStyle}>{port.splitterOut}</td>
        <td style={tdStyle}>{port.cassetteID}</td>
        <td style={tdStyle}>{port.fiberNr}</td>
        <td style={tdStyle}>{port.fullID}</td>
        <td style={tdStyle}>{port.used ? 'Yes' : 'No'}</td>
      </tr>
    ))}
  </tbody>
</table>
      <div style={{ marginTop: '15px' }}>
        <button onClick={handlePrev} disabled={currentPage === 1} style={buttonStyle}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages} style={buttonStyle}>Next</button>
      </div>
    </div>
  );
};
const thStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  fontWeight: 'bold',
  backgroundColor: '#eee'
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px'
};

const buttonStyle = {
  padding: '6px 12px',
  margin: '0 5px',
  cursor: 'pointer'
};

export default SpliterTest


