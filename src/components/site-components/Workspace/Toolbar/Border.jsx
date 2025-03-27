import React, { useState } from "react";
import { IoOptions } from "react-icons/io5";
import { MdInvertColors } from "react-icons/md";
import { TbRadiusBottomRight } from "react-icons/tb";
import { RxWidth } from "react-icons/rx";
import Demo from "../../Demo";

function Border() {
  const [borderWidth, setBorderWidth] = useState(2); // Default value
  const [unit, setUnit] = useState("px"); // Default unit

  const increaseWidth = () => setBorderWidth((prev) => prev + 1);
  const decreaseWidth = () =>
    setBorderWidth((prev) => (prev > 0 ? prev - 1 : 0));

  const [borderRadius, setBorderRadius] = useState(2); // Default value
  const [unitRadius, setUnitRadius] = useState("px"); // Default unit

  const increaseRadius = () => setBorderRadius((prev) => prev + 1);
  const decreaseRadius = () =>
    setBorderRadius((prev) => (prev > 0 ? prev - 1 : 0));

  const [selectedStyle, setSelectedStyle] = useState("solid"); // Default selected

  const borderStyles = ["none", "solid", "dashed", "dotted", "double"];

  return (
    <div>
      <div className="select-none">
        {/* Title of the section  */}
        <div className="text-[var(--light)] mt-2 flex-col">
          Border
          <hr className="border-[var(--light)] mb-3"></hr>
        </div>
        {/* Border-Type */}
        <div className="flex uppercase items-center mt-2 justify-between">
          {" "}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <IoOptions className="text-sm text-gray-500 mr-2" />
            type
          </div>
          <div className="flex bg-[var(--subboard)] rounded-md">
            {borderStyles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`p-1 px-2  text-[0.8em] uppercase flex-1 text-center rounded-md ${
                  selectedStyle === style
                    ? "bg-[var(--darkmain)] rounded-md text-gray-300 border-[var(--main)]"
                    : "bg-[var(--subboard)] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)]"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        {/* Border-color  */}
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
        {/* Border Width */}
        <div className="flex uppercase items-center mt-[0.15em] justify-between">
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <RxWidth className="text-sm text-gray-500 mr-2" />
            width
          </div>
          <div className="flex items-center rounded-md">
            {/* Decrease Button */}
            <button
              onClick={decreaseWidth}
              className="p-1 px-2 text-[0.8em] bg-[var(--darkmain)] text-gray-300 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-l-md"
            >
              -
            </button>

            {/* Number Input (Editable) */}
            <input
              type="number"
              value={borderWidth}
              onChange={(e) => setBorderWidth(Number(e.target.value))}
              className="w-10 text-center bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none"
            />

            {/* Increase Button */}
            <button
              onClick={increaseWidth}
              className="p-1 px-2 text-[0.8em] bg-[var(--darkmain)] text-gray-300 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
            >
              +
            </button>

            {/* Unit Selector */}
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="p-1 px-2 uppercase ml-1 bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-md"
            >
              <option value="px">px</option>
              <option value="rem">rem</option>
              <option value="em">em</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
        {/* Border Radius  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <TbRadiusBottomRight className="text-sm text-gray-500 mr-2" />
            radius
          </div>
          <div className="flex items-center rounded-md">
            {/* Decrease Button */}
            <button
              onClick={decreaseRadius}
              className="p-1 px-2 text-[0.8em] bg-[var(--darkmain)] text-gray-300 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-l-md"
            >
              -
            </button>

            {/* Number Input (Editable) */}
            <input
              type="number"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              className="w-10 text-center bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none"
            />

            {/* Increase Button */}
            <button
              onClick={increaseRadius}
              className="p-1 px-2 text-[0.8em] bg-[var(--darkmain)] text-gray-300 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
            >
              +
            </button>

            {/* Unit Selector */}
            <select
              value={unitRadius}
              onChange={(e) => setUnitRadius(e.target.value)}
              className="p-1 px-2 ml-1 uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-md"
            >
              <option value="px">px</option>
              <option value="rem">rem</option>
              <option value="em">em</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Border;
