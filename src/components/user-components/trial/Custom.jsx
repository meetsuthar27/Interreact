import { useState } from "react";
import useComponentAttributes from "./useComponentAttributes";
import ComponentRenderer from "./ComponentRenderer";

const Custom = () => {
  const {
    attributes,
    setBgColor,
    setTextColor,
    setBorderStyle,
    setBorderColor,
    setBorderWidth,
  } = useComponentAttributes();
  const [selectedComponent, setSelectedComponent] = useState("accordion"); // Default to Accordion

  // Generate Tailwind Classes for Copying
  const tailwindClasses = `p-4 rounded-md ${attributes.textColor} ${attributes.borderStyle} ${attributes.borderColor} border-${attributes.borderWidth} bg-[${attributes.bgColor}]`;

  return (
    <div className="flex gap-8 p-8">
      {/* Component Preview */}
      <div className="scale-[0.8] origin-top-left">
        <h2 className="font-bold text-lg mb-4">Live Preview</h2>
        <ComponentRenderer
          componentType={selectedComponent}
          attributes={attributes}
        />
      </div>

      {/* Customization Panel */}
      <div className="flex flex-col gap-4 p-4 border rounded-md">
        <h2 className="font-bold text-lg">Customize</h2>

        {/* Component Selection */}
        <label>Choose Component</label>
        <select
          onChange={(e) => setSelectedComponent(e.target.value)}
          className="p-2 border"
        >
          <option value="accordion">Accordion</option>
          <option value="menu">Menu Bar</option>
        </select>

        {/* Background Color */}
        <label>Background Color</label>
        <input
          type="color"
          value={attributes.bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="w-16 h-10 border rounded-md cursor-pointer"
        />

        {/* Text Color */}
        <label>Text Color</label>
        <select
          onChange={(e) => setTextColor(e.target.value)}
          className="p-2 border"
        >
          <option value="text-black">Black</option>
          <option value="text-white">White</option>
          <option value="text-gray-700">Gray</option>
        </select>

        {/* Border Style */}
        <label>Border Style</label>
        <select
          onChange={(e) => setBorderStyle(e.target.value)}
          className="p-2 border"
        >
          <option value="border-solid">Solid</option>
          <option value="border-dashed">Dashed</option>
          <option value="border-dotted">Dotted</option>
        </select>

        {/* Border Color */}
        <label>Border Color</label>
        <select
          onChange={(e) => setBorderColor(e.target.value)}
          className="p-2 border"
        >
          <option value="border-gray-400">Gray</option>
          <option value="border-blue-500">Blue</option>
          <option value="border-red-500">Red</option>
        </select>

        {/* Border Width */}
        <label>Border Thickness</label>
        <input
          type="range"
          min="1"
          max="8"
          value={attributes.borderWidth}
          onChange={(e) => setBorderWidth(e.target.value)}
          className="w-full"
        />
        <p className="text-sm">Current Thickness: {attributes.borderWidth}px</p>

        {/* Copy Code Section */}
        <div className="mt-4 p-2 border rounded-md bg-gray-100">
          <p className="font-mono text-sm whitespace-pre-wrap">
            {`<div className="${tailwindClasses}">
  <h3 className="font-bold text-lg">${
    selectedComponent === "accordion" ? "Accordion Title" : "Menu Bar"
  }</h3>
  ${
    selectedComponent === "accordion"
      ? `<p className="mt-2 text-sm">This is an example accordion content.</p>`
      : `<ul><li>Home</li><li>About</li><li>Contact</li></ul>`
  }
</div>`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom;
