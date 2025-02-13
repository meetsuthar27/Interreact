import React from "react";
import { ColorPicker, Space } from "antd";
const Demo = () => (
  <ColorPicker
    defaultValue="#039971"
    style={{
      backgroundColor: "rgb(209 213 219)",
      color: "#ffffff",
    }}
    className="jet-bold p-2 scale-[0.8] text-gray-200"
    showText
  />
);
export default Demo;
