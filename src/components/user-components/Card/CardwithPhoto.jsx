/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const styles = {
  width: "1000px",
  backgroundColor: "white",
  borderRadius: "20px",
  textColor: "#261726",
};
// React Component
const ReactComponent = () => (
  <div
    style={{
      width: styles.width,
      backgroundColor: styles.backgroundColor,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: styles.borderRadius,
      overflow: "hidden",
      border: "1px solid #E5E7EB",
    }}
  >
    <img
      src="../../images/react.jpg"
      alt="React"
      style={{
        width: "100%",
        height: "12rem",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h2
        style={{
          fontSize: "1.125rem",
          fontWeight: "600",
          color: styles.textColor,
        }}
      >
        Card title
      </h2>
      <p style={{ fontSize: "0.875rem", color: "#4B5563", marginTop: "8px" }}>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a
        href="#"
        style={{
          marginTop: "16px",
          display: "inline-block",
          backgroundColor: "#3B82F6",
          color: "white",
          fontSize: "0.875rem",
          fontWeight: "500",
          padding: "8px 16px",
          borderRadius: "4px",
          textDecoration: "none",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563EB")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3B82F6")}
      >
        Go somewhere
      </a>
    </div>
  </div>
);

// Tailwind Component
const TailwindComponent = () => (
  <div
    className="w-[var(--width)] bg-[var(--bg-color)] rounded-[var(--border-radius)] shadow-lg overflow-hidden border border-gray-200"
    style={{
      "--width": styles.width,
      "--bg-color": styles.backgroundColor,
      "--border-radius": styles.borderRadius,
    }}
  >
    <img
      src="../../images/react.jpg"
      alt="React"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className={`text-lg font-semibold text-[${styles.textColor}]`}>
        Card title
      </h2>
      <p className="text-sm text-gray-600 mt-2">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a
        href="#"
        className="mt-4 inline-block bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Go somewhere
      </a>
    </div>
  </div>
);

const CardwithPhoto = () => {
  const [selected, setSelected] = useState("react"); // State for selection

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Choose a Framework</h1>

      {/* Dropdown Selection */}
      <select
        className="p-2 border border-gray-500 rounded-md mb-4"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="react">React</option>
        <option value="tailwind">Tailwind</option>
      </select>

      {/* Render the selected component */}
      {selected === "react" ? <ReactComponent /> : <TailwindComponent />}
    </div>
  );
};

export default CardwithPhoto;
