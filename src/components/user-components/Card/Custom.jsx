import { useState } from "react";

const Custom = () => {
  const [bgColor, setBgColor] = useState("#ffffff"); // Hex color input
  const [textColor, setTextColor] = useState("#000000");
  const [borderStyle, setBorderStyle] = useState("border-solid");
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderWidth, setBorderWidth] = useState("2");

  // Generating Tailwind class string (static for copying)
  const tailwindClasses = `p-4 rounded-md text-[${textColor}] ${borderStyle} border-[${borderColor}] border-${borderWidth} bg-[${bgColor}]`;

  return (
    <div className="flex gap-8 p-8">
      {/* Live Preview (Inline Styles for Colors) */}
      <div className="scale-[0.8] origin-top-left">
        <h2 className="font-bold text-lg mb-4">Live Preview</h2>
        <div
          className="p-4 rounded-md"
          style={{
            backgroundColor: bgColor, // Inline CSS for Live Preview
            color: textColor,
            borderStyle: borderStyle.replace("border-", ""),
            borderColor: borderColor,
            borderWidth: `${borderWidth}px`,
          }}
        >
          <h3 className="font-bold text-lg">Accordion Title</h3>
          <p className="mt-2 text-sm">This is an example accordion content.</p>
        </div>
      </div>

      {/* Customization Controls */}
      <div className="flex flex-col gap-4 p-4 border rounded-md">
        <h2 className="font-bold text-lg">Customize</h2>

        {/* Background Color */}
        <label>Background Color</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="w-16 h-10 border rounded-md cursor-pointer"
        />

        {/* Text Color */}
        <label>Text Color</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="w-16 h-10 border rounded-md cursor-pointer"
        />

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
        <input
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
          className="w-16 h-10 border rounded-md cursor-pointer"
        />

        {/* Border Width */}
        <label>Border Thickness</label>
        <input
          type="range"
          min="1"
          max="8"
          value={borderWidth}
          onChange={(e) => setBorderWidth(e.target.value)}
          className="w-full"
        />
        <p className="text-sm">Current Thickness: {borderWidth}px</p>

        {/* Copy Code Section */}
        <div className="mt-4 p-2 border rounded-md bg-gray-100">
          <p className="font-mono text-sm whitespace-pre-wrap">
            {`<div className="${tailwindClasses}">
  <h3 className="font-bold text-lg">Accordion Title</h3>
  <p className="mt-2 text-sm">This is an example accordion content.</p>
</div>`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom;
