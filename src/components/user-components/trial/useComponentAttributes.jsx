import { useState } from "react";

const useComponentAttributes = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("text-black");
  const [borderStyle, setBorderStyle] = useState("border-solid");
  const [borderColor, setBorderColor] = useState("border-gray-400");
  const [borderWidth, setBorderWidth] = useState("2");

  return {
    attributes: { bgColor, textColor, borderStyle, borderColor, borderWidth },
    setBgColor,
    setTextColor,
    setBorderStyle,
    setBorderColor,
    setBorderWidth,
  };
};

export default useComponentAttributes;
