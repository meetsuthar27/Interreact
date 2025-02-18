import React, { useState } from "react";
// import React, { useState } from "react";
import { IoOptions } from "react-icons/io5";
import { MdInvertColors } from "react-icons/md";
import { TbRadiusBottomRight } from "react-icons/tb";
import { LuText } from "react-icons/lu";
import { TbWashDryShade } from "react-icons/tb";
import { MdOutlineTextFields } from "react-icons/md";
import { BiBold } from "react-icons/bi";
import { FaListOl, FaListUl } from "react-icons/fa";
import { MdOutlineTextFormat } from "react-icons/md";
import { FaItalic } from "react-icons/fa";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import { TbOverline, TbUnderline } from "react-icons/tb";
import { FaUnderline } from "react-icons/fa6";
import { FaFont } from "react-icons/fa6";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { RiTextSpacing } from "react-icons/ri";
// import { IoOptions } from "react-icons/io5";
import {
  AiOutlineAlignLeft,
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { LuAlignJustify } from "react-icons/lu";
import Demo from "../../Demo";

function Text() {
  const [shadowSize, setShadowSize] = useState(10); // Default shadow size
  const [unitShadow, setUnitShadow] = useState("px"); // Default unit
  const [predefinedShadow, setPredefinedShadow] = useState(""); // Predefined shadows

  const decreaseShadow = () => setShadowSize((prev) => Math.max(prev - 1, 0)); // Prevent negative values
  const increaseShadow = () => setShadowSize((prev) => prev + 1);

  const [selectedAlign, setSelectedAlign] = useState("left"); // Default alignment

  const alignOptions = [
    { value: "left", icon: <AiOutlineAlignLeft /> },
    { value: "center", icon: <AiOutlineAlignCenter /> },
    { value: "right", icon: <AiOutlineAlignRight /> },
    { value: "justify", icon: <LuAlignJustify /> },
  ];

  const [selectedDecor, setSelectedDecor] = useState({
    bold: false,
    italic: false,
    decoration: "none", // Can be "underline", "overline", "strike", or "none"
  });

  const decorOptions = [
    { value: "none", icon: <MdOutlineDoNotDisturbAlt /> },
    { value: "bold", icon: <BiBold /> },
    { value: "italic", icon: <FaItalic /> },
    { value: "underline", icon: <TbUnderline /> },
    { value: "overline", icon: <TbOverline /> },
    { value: "strike", icon: <AiOutlineStrikethrough /> },
  ];

  const handleDecorChange = (option) => {
    if (option === "bold") {
      setSelectedDecor((prev) => ({ ...prev, bold: !prev.bold }));
    } else if (option === "italic") {
      setSelectedDecor((prev) => ({ ...prev, italic: !prev.italic }));
    } else {
      // If user selects any of the decoration options (underline, overline, or strike)
      setSelectedDecor((prev) => ({
        ...prev,
        decoration: prev.decoration === option ? "none" : option,
      }));
    }
  };

  const [selectedFont, setSelectedFont] = useState("sans"); // Default alignment

  const fontOptions = [
    { value: "sans", label: "Sans", className: "font-sans" },
    { value: "serif", label: "Serif", className: "font-serif" },
    { value: "mono", label: "Mono", className: "font-mono" },
  ];

  const [selectedList, setSelectedList] = useState("none"); // Default alignment

  const listOptions = [
    { value: "none", icon: <MdOutlineDoNotDisturbAlt /> },
    { value: "unordered", icon: <FaListUl /> },
    { value: "ordered", icon: <FaListOl /> },
  ];

  const trackingOptions = [
    { value: "-0.05em", label: "Tighter", className: "tracking-tighter" },
    { value: "-0.025em", label: "Tight", className: "tracking-tight" },
    { value: "0em", label: "Normal", className: "tracking-normal" },
    { value: "0.025em", label: "Wide", className: "tracking-wide" },
    { value: "0.05em", label: "Wider", className: "tracking-wider" },
    { value: "0.1em", label: "Widest", className: "tracking-widest" },
  ];

  const [tracking, setTracking] = useState(2); // Default: Normal (index 2)

  const handleSliderChange = (e) => {
    setTracking(Number(e.target.value));
  };

  return (
    <div>
      <div className="select-none ">
        {/* Title of the section  */}
        <div className="text-[var(--light)] mt-2 flex-col">
          text
          <hr className="border-[var(--light)] mb-3"></hr>
        </div>

        {/* Text Size  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <MdOutlineTextFields className="text-sm text-gray-500 mr-2" />
            text size
          </div>

          {/* Controls */}
          <div className="flex items-center rounded-md">
            {/* Decrease Button */}
            <button
              onClick={decreaseShadow}
              className="p-1 px-2 text-[0.8em] bg-[var(--darkmain)] text-gray-300 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-l-md"
            >
              -
            </button>

            {/* Number Input (Editable) */}
            <input
              type="number"
              value={shadowSize}
              onChange={(e) => setShadowSize(Number(e.target.value))}
              className="w-10 text-center bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none"
            />

            {/* Increase Button */}
            <button
              onClick={increaseShadow}
              className="p-1 px-2 text-[0.8em] bg-[var(--darkmain)] text-gray-300 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
            >
              +
            </button>

            {/* Unit Selector */}
            <select
              value={unitShadow}
              onChange={(e) => setUnitShadow(e.target.value)}
              className="p-1 px-2 ml-1 uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-md"
            >
              <option value="px">px</option>
              <option value="rem">rem</option>
              <option value="em">em</option>
              <option value="%">%</option>
            </select>

            {/* Predefined Shadow Selector */}
            <select
              value={predefinedShadow}
              onChange={(e) => setPredefinedShadow(e.target.value)}
              className="p-1 px-1 ml-1 uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out hover:text-[var(--main)] rounded-md"
            >
              <option value="">Custom</option>
              <option value="2xs">2xs</option>
              <option value="xs">XS</option>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
              <option value="2xl">2xl</option>
            </select>
          </div>
        </div>

        {/* Font family */}
        <div className="flex uppercase items-center mt-1 justify-between">
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <FaFont className="text-sm text-gray-500 mr-2" />
            style
          </div>

          {/* Buttons */}
          <div className="flex bg-[var(--subboard)]  rounded-md">
            {fontOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedFont(option.value)}
                className={`p-1 px-2 text-[0.8em] uppercase flex-1 text-center flex items-center gap-1 justify-center rounded-md ${
                  selectedFont === option.value
                    ? "bg-[var(--darkmain)] text-gray-300 border-[var(--main)]"
                    : "bg-[var(--subboard)] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out hover:text-[var(--main)]"
                }`}
              >
                <option
                  key={option.value}
                  value={option.value}
                  className={option.className}
                >
                  {option.label}
                </option>
              </button>
            ))}
          </div>
        </div>

        {/* Alignment  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <LuText className="text-sm text-gray-500 mr-2" />
            alignment
          </div>

          {/* Buttons */}
          <div className="flex bg-[var(--subboard)] rounded-md">
            {alignOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedAlign(option.value)}
                className={`p-1 px-2 text-1em uppercase flex-1 text-center flex items-center gap-1 justify-center rounded-md ${
                  selectedAlign === option.value
                    ? "bg-[var(--darkmain)] text-gray-300 border-[var(--main)]"
                    : "bg-[var(--subboard)] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out hover:text-[var(--main)]"
                }`}
              >
                {option.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Decoration  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <MdOutlineTextFormat className="text-sm text-gray-500 mr-2" />
            decoration
          </div>

          {/* Buttons */}
          <div className="flex bg-[var(--subboard)] rounded-md">
            {decorOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleDecorChange(option.value)}
                className={`p-1 px-2 text-1em uppercase flex-1 text-center flex items-center gap-1 justify-center rounded-md ${
                  (option.value === "bold" && selectedDecor.bold) ||
                  (option.value === "italic" && selectedDecor.italic) ||
                  option.value === selectedDecor.decoration
                    ? "bg-[var(--darkmain)] text-gray-300 border-[var(--main)]"
                    : "bg-[var(--subboard)] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out hover:text-[var(--main)]"
                }`}
              >
                {option.icon}
              </button>
            ))}
          </div>
        </div>

        {/* List  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <FaListUl className="text-sm text-gray-500 mr-2" />
            list
          </div>

          {/* Buttons */}
          <div className="flex bg-[var(--subboard)] rounded-md">
            {listOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedList(option.value)}
                className={`p-1 px-2 text-1em uppercase flex-1 text-center flex items-center gap-1 justify-center rounded-md ${
                  selectedList === option.value
                    ? "bg-[var(--darkmain)] text-gray-300 border-[var(--main)]"
                    : "bg-[var(--subboard)] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out hover:text-[var(--main)]"
                }`}
              >
                {option.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Letter Spacing  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <RiTextSpacing className="text-sm text-gray-500 mr-2" />
            letter-spacing
          </div>

          {/* Spacing */}

          <div className="flex items-center">
            {/* Slider Input */}
            <span className="text-gray-500 text-xs pr-2 uppercase transition ease tracking-wide">
              {trackingOptions[tracking].label}
            </span>
            <div className="bg-[var(--subboard)] p-2 rounded-md flex items-center justify-center">
              <input
                type="range"
                min="0"
                max={trackingOptions.length - 1}
                step="1"
                value={tracking}
                onChange={handleSliderChange}
                className="w-full h-1 rounded-md py-1 cursor-pointer 
               appearance-none transition-all duration-300
               [&::-webkit-slider-runnable-track]:bg-[var(--border)] 
               [&::-webkit-slider-runnable-track]:h-[1px]
               [&::-webkit-slider-thumb]:appearance-none 
               [&::-webkit-slider-thumb]:w-3 
               [&::-webkit-slider-thumb]:h-3 
               [&::-webkit-slider-thumb]:bg-[var(--light)] 
               [&::-webkit-slider-thumb]:rounded-sm 
               [&::-webkit-slider-thumb]:relative 
               [&::-webkit-slider-thumb]:top-1/2 
               [&::-webkit-slider-thumb]:translate-y-[-50%]"
              />
            </div>

            {/* Selected Value */}
          </div>
        </div>

        {/* Text Color  */}
        <div className="flex items-center  mt-[0.15em] justify-between">
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <MdInvertColors className="text-sm text-gray-500 mr-2" />
            color
          </div>
          <div className="items-center m-0 flex">
            <div className="">
              <Demo />
            </div>
            <div className="bg-[var(--subboard)] gap-[0.3em] p-1 rounded-md flex">
              <div className="h-[1.3em] w-[1.3em] rounded-sm bg-blue-500"></div>
              <div className="h-[1.3em] w-[1.3em] rounded-sm bg-red-400"></div>
              <div className="h-[1.3em] w-[1.3em] rounded-sm bg-yellow-400"></div>
              <div className="h-[1.3em] w-[1.3em] rounded-sm bg-blue-500"></div>
              <div className="h-[1.3em] w-[1.3em] rounded-sm bg-red-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
