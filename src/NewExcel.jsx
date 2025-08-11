import { useState } from "react";
import * as XLSX from "xlsx";
import dayjs from "dayjs";

export default function NewExcel() {
  const [data, setData] = useState([]);

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

        // Transform once before storing
        const cleanedData = jsonData.map((row) => ({
          ...row,
          "Last Contact Date": formatExcelDate(row["Last Contact Date"]),
          Status: {
            text: row.Status,
            color: getStatusColor(row.Status),
          },
        }));

        setData(cleanedData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // Helpers
  const formatExcelDate = (val) => {
    if (!val) return "";
    if (!isNaN(val)) {
      const excelDate = XLSX.SSF.parse_date_code(val);
      return dayjs(new Date(excelDate.y, excelDate.m - 1, excelDate.d)).format(
        "DD MMM YYYY"
      );
    }
    return dayjs(val).format("DD MMM YYYY");
  };

  const getStatusColor = (status) => {
    switch ((status || "").toLowerCase()) {
      case "active":
        return "green";
      case "prospect":
        return "blue";
      case "lead":
        return "orange";
      case "inactive":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div>
      Insert Your File here :
      <input type="file" accept=".xlsx, .xl, .csv" onChange={handleChange} />
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
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
              {Object.values(row).map((val, j) => {
                if (typeof val === "object" && val.color) {
                  return (
                    <td key={j}>
                      <span
                        style={{
                          backgroundColor: val.color,
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                        }}
                      >
                        {val.text}
                      </span>
                    </td>
                  );
                }
                return <td key={j}>{val}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
