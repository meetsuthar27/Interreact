import { useState } from "react";
import * as XLSX from "xlsx";

export default function Prac() {
  const [data, setData] = useState([]);

  //   const [data, setData] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const arrayBuffer = new Uint8Array(event.target.result);
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        console.log(jsonData);
        setData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  function excelDateToJSDate(serial) {
    const excelEpoch = new Date(1900, 0, 1); // Jan 1, 1900
    const jsDate = new Date(
      excelEpoch.getTime() + (serial - 2) * 24 * 60 * 60 * 1000
    );
    return jsDate;
  }

  setData((prevData) =>
    prevData.map((row) => ({
      ...row,
      Date: excelDateToJSDate(row.Date).toLocaleString(),
    }))
  );

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => a.Name.localeCompare(b.Name));
    setData(sortedData);
  };

  const handleDateSort = () => {};

  //   const arr = Object.keys(data[0]);
  //   console.log(arr);

  return (
    <>
      <div>
        <h1>Pick an excel file</h1>
        <input type="file" accept=".xlsx, .xls, .csv" onChange={handleChange} />
      </div>

      <div className="border-2">
        <button onClick={handleSort}>Sort by Name</button>
        <button onClick={handleDateSort}>Sort by Date</button>
      </div>

      <div>
        <table border="1" cellPadding="8">
          <thead>
            {data[0] && (
              <tr className="flex gap-10">
                {Object.keys(data[0]).map((val, i) => (
                  <th key={i}> {val}</th>
                ))}
              </tr>
            )}
          </thead>

          {data.map((row, i) => (
            <tbody key={i}>
              <tr className="flex gap-10">
                {Object.values(row).map((val, j) => (
                  <td className="text-left" key={j}>
                    {val}
                  </td>
                ))}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
