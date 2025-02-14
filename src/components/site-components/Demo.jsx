import React, { useState } from "react";
import { ColorPicker } from "antd";

const Demo = () => {
  const [color, setColor] = useState("#039971"); // Default color

  return (
    <div className="flex flex-col items-center">
      {/* 🎨 Color Picker */}
      <ColorPicker
        defaultValue={color}
        onChangeComplete={(colorObj) => setColor(colorObj.toHexString())} // Get HEX value
        style={{
          backgroundColor: "rgb(209 213 219)",
          color: "#ffffff",
        }}
        className="jet-bold scale-[0.85] text-gray-200"
        showText
      />
    </div>
  );
};

export default Demo;
