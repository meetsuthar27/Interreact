import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ReactCodes() {
  const codeString1 = `
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
        setData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "green";
      case "prospect": return "blue";
      case "lead": return "orange";
      case "inactive": return "red";
      default: return "gray";
    }
  };

  return (
    <div>
      Insert Your File here :
      <input type="file" accept=".xlsx, .xl, .csv" onChange={handleChange} />
      <div>
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
                {Object.entries(row).map(([key, val], j) => {
                  if (key.toLowerCase().includes("date") && val) {
                    let formattedDate;
                    if (!isNaN(val)) {
                      const excelDate = XLSX.SSF.parse_date_code(val);
                      formattedDate = dayjs(
                        new Date(excelDate.y, excelDate.m - 1, excelDate.d)
                      ).format("DD MMM YYYY");
                    } else {
                      formattedDate = dayjs(val).format("DD MMM YYYY");
                    }
                    return <td key={j}>{formattedDate}</td>;
                  }
                  if (key.toLowerCase() === "status") {
                    return (
                      <td key={j}>
                        <span style={{
                          backgroundColor: getStatusColor(val),
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                        }}>
                          {val}
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
    </div>
  );
}
`;

  const queries = [
    `// SQL: SELECT * FROM customers;
const allCustomers = data;`,

    `// SQL: SELECT * FROM customers WHERE Status = 'Active';
const activeCustomers = data.filter(c => c.Status === "Active");`,

    `// SQL: SELECT * FROM customers WHERE Status = 'Active' AND Country = 'India';
const indianActiveCustomers = data.filter(
  c => c.Status === "Active" && c.Country === "India"
);`,

    `// SQL: SELECT * FROM customers ORDER BY Name ASC;
const sortedByName = [...data].sort((a, b) =>
  a.Name.localeCompare(b.Name)
);`,

    `// SQL: SELECT * FROM customers ORDER BY Name DESC;
const sortedByNameDesc = [...data].sort((a, b) =>
  b.Name.localeCompare(a.Name)
);`,

    `// SQL: SELECT * FROM customers ORDER BY LastContactDate DESC;
const sortedByDateDesc = [...data].sort((a, b) =>
  new Date(a["Last Contact Date"]) < new Date(b["Last Contact Date"]) ? 1 : -1
);`,

    `// SQL: SELECT Status, COUNT(*) FROM customers GROUP BY Status;
const groupByStatus = data.reduce((acc, c) => {
  acc[c.Status] = (acc[c.Status] || 0) + 1;
  return acc;
}, {});`,

    `// SQL: SELECT COUNT(*) FROM customers;
const totalCount = data.length;`,

    `// SQL: SELECT DISTINCT Country FROM customers;
const distinctCountries = [...new Set(data.map(c => c.Country))];`,

    `// SQL: SELECT * FROM customers LIMIT 5;
const firstFive = data.slice(0, 5);`,

    `// SQL: SELECT * FROM customers WHERE Name LIKE '%Sharma%';
const nameContainsSharma = data.filter(c =>
  c.Name.toLowerCase().includes("sharma")
);`,

    `// SQL: SELECT MAX(LastContactDate) FROM customers;
const latestDate = data.reduce((max, c) =>
  new Date(c["Last Contact Date"]) > new Date(max) ? c["Last Contact Date"] : max
, data[0]["Last Contact Date"]);`,
  ];

  return (
    <div className="min-h-screen bg-[var(--main)] flex flex-col items-center py-10 px-4">
      {/* Page Title */}
      <h1 className="text-[var(--light)] text-3xl jet-bold mb-6">
        📄 Show Excel File Code
      </h1>

      {/* Card Container */}
      <div className="w-full max-w-5xl bg-[var(--subboard)] border border-[var(--border)] rounded-xl shadow-lg overflow-hidden">
        {/* Card Header */}
        <div className="bg-[var(--darkmain)] px-4 py-3 border-b border-[var(--border3)]">
          <h2 className="text-[var(--light)] jet-normal text-lg">
            React Component: <span className="text-[var(--l1)]">NewExcel</span>
          </h2>
        </div>

        {/* Syntax Highlighted Code */}
        <div className="overflow-auto">
          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: "1rem",
              fontFamily: "var(--font-jet)",
              fontSize: "0.9rem",
            }}
          >
            {codeString1}
          </SyntaxHighlighter>
        </div>

        <div className="overflow-auto">
          {" "}
          <h1 className="text-[var(--light)] text-3xl jet-bold mb-6">
            SQL Queries
          </h1>
          {queries.map((query, index) => (
            <div key={index}>
              <h3>Example {index + 1}</h3>
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  fontFamily: "var(--font-jet)",
                  fontSize: "0.9rem",
                }}
              >
                {query}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReactCodes;
