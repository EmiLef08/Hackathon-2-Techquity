import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "../styles/pages/Visualisation.scss";

function Visualisation() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const storedCsvData = localStorage.getItem('csvData');
    if (storedCsvData) {
      setCsvData(Papa.parse(storedCsvData).data);
      localStorage.removeItem('csvData');
    }
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
        console.log(result.data);
      },
    });
  };

  return (
    <div className="container">
      <div className="card-container-visualisation">
        <div className="visualisation">
          <p className="visualisation-title">Visualisation</p>
          <input type="file" onChange={handleFileUpload} />
          <table>
            <tbody>
              {csvData.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={`${i}-${j}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Visualisation;