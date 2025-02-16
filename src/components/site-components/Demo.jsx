import React, { useState } from "react";
import { ColorPicker } from "antd";

const Demo = () => {
  const [color, setColor] = useState("#ffffff"); // Default color

  return (
    <div className="flex flex-col items-center">
      {/* 🎨 Color Picker */}
      <ColorPicker
        defaultValue={color}
        onChangeComplete={(colorObj) => setColor(colorObj.toHexString())} // Get HEX value
        style={{
          backgroundColor: "#414558",
          padding: "3%",
          margin: "0px",
          border: "1px solid #2b2d37",
          color: "oklch(0.554 0.046 257.417)",
        }}
        className="jet-bold scale-[0.85] text-gray-200"
        showText
      />
    </div>
  );
};

export default Demo;
