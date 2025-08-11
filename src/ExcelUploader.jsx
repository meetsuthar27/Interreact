import { useState } from "react";
import * as XLSX from "xlsx";

export default function ExcelUploader() {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const bstr = e.target.result; // raw binary string
      const workbook = XLSX.read(bstr, { type: "binary" }); // read Excel file
      const sheetName = workbook.SheetNames[0]; // first sheet name
      const sheet = workbook.Sheets[sheetName]; // get sheet
      const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" }); // sheet → JSON
      setData(jsonData); // store in state
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={handleFileUpload}
      />

      <table border="1">
        <thead>
          {data[0] && (
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td
                  key={j}
                  style={{
                    color:
                      val > 8 && j > 3
                        ? "green"
                        : val < 5 && j > 3
                        ? "red"
                        : 8 < val < 5 && j > 3
                        ? "orange"
                        : "black",
                  }}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
