import React, { useState } from "react";
import { IoOptions } from "react-icons/io5";
import { MdInvertColors } from "react-icons/md";
import { TbRadiusBottomRight } from "react-icons/tb";
import { RxWidth } from "react-icons/rx";
import { RxShadow } from "react-icons/rx";
import { TbWashDryShade } from "react-icons/tb";
import Demo from "../../Demo";

function Shadow() {
  const [shadowSize, setShadowSize] = useState(10); // Default shadow size
  const [unitShadow, setUnitShadow] = useState("px"); // Default unit
  const [predefinedShadow, setPredefinedShadow] = useState(""); // Predefined shadows

  const decreaseShadow = () => setShadowSize((prev) => Math.max(prev - 1, 0)); // Prevent negative values
  const increaseShadow = () => setShadowSize((prev) => prev + 1);

  const [selectedStyle, setSelectedStyle] = useState("normal"); // Default selected

  const borderStyles = ["none", "normal", "inset"];

  return (
    <div>
      <div className="select-none">
        {/* Title of the section  */}
        <div className="text-[var(--light)] mt-2 flex-col">
          shadow
          <hr className="border-[var(--light)] mb-3"></hr>
        </div>
        {/*Shadow-Type */}
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
        {/* Shadow-color  */}
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

        {/* Border Radius  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <TbWashDryShade className="text-sm text-gray-500 mr-2" />
            shadow
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
      </div>
    </div>
  );
}

export default Shadow;
