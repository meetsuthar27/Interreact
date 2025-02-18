import React, { useState } from "react";
import { TbWashDryShade } from "react-icons/tb";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoMoveOutline } from "react-icons/io5";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";
import { TbSkewY } from "react-icons/tb";
import Demo from "../../Demo";

function Transform() {
  const [scaleSize, setScaleSize] = useState(100); // Default scale size
  const [unitScale, setUnitScale] = useState("%"); // Default unit

  const [rotateSize, setRotateSize] = useState(0); // Default scale size
  const [unitRotate, setUnitRotate] = useState("deg"); // Default unit

  const [moveSizex, setMoveSizex] = useState(0); // Default move size
  const [unitMovex, setUnitMovex] = useState("px"); // Default unit
  const [moveSizey, setMoveSizey] = useState(0); // Default move size
  const [unitMovey, setUnitMovey] = useState("px"); // Default unit

  const [skewSizex, setSkewSizex] = useState(0); // Default move size
  const [unitSkewx, setUnitSkewx] = useState("px"); // Default unit
  const [skewSizey, setSkewSizey] = useState(0); // Default move size
  const [unitSkewy, setUnitSkewy] = useState("px"); // Default unit

  return (
    <div>
      <div className="select-none">
        {/* Title of the section  */}
        <div className="text-[var(--light)] mt-2 flex-col">
          transform
          <hr className="border-[var(--light)] mb-3"></hr>
        </div>

        {/* Scale  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <SlSizeFullscreen className="text-sm text-gray-500 mr-2" />
            scale
          </div>

          {/* Controls */}
          <div className="flex items-center rounded-md">
            {/* Number Input (Editable) */}
            <input
              type="number"
              value={scaleSize}
              onChange={(e) => setScaleSize(Number(e.target.value))}
              className="w-15 text-left pl-2 bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none rounded-l-md"
            />

            {/* Unit Selector */}
            <select
              value={unitScale}
              onChange={(e) => setUnitScale(e.target.value)}
              className="p-1 px-1 border-l-[2px] border-[var(--border)] uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
            >
              <option value="px">px</option>
              <option value="rem">rem</option>
              <option value="em">em</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>

        {/* Rotate  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <MdOutlineRotate90DegreesCcw className="text-sm text-gray-500 mr-2" />
            Rotate
          </div>

          {/* Controls */}
          <div className="flex items-center rounded-md">
            {/* Number Input (Editable) */}
            <input
              type="number"
              value={rotateSize}
              onChange={(e) => {
                let value = Number(e.target.value);

                if (value > 360) value = 0; // Reset to 0 if greater than 360
                else if (value < 0) value = 360; // Switch to 360 if below 0

                setRotateSize(value);
              }}
              className="w-15 text-left pl-2 bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none rounded-l-md"
            />

            {/* Unit Selector */}
            <div className="p-1 pr-2 uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md">
              degree
            </div>
          </div>
        </div>

        {/* Move  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}

          <div className="text-sm flex items-center text-gray-300 mr-2">
            <IoMoveOutline className="text-sm text-gray-500 mr-2" />
            move
          </div>

          {/* Controls */}
          <div className="flex items-center rounded-md">
            <div className="flex items-center">
              <div className="text-sm text-gray-500 px-2">X</div>
              {/* Number Input (Editable) */}
              <input
                type="number"
                value={moveSizex}
                onChange={(e) => setMoveSizex(Number(e.target.value))}
                className="w-10 text-left pl-2 bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none rounded-l-md"
              />

              {/* Unit Selector */}
              <select
                value={unitMovex}
                onChange={(e) => setUnitMovex(e.target.value)}
                className="p-1 px-1 border-l-[2px] border-[var(--border)] uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
              >
                <option value="px">px</option>
                <option value="rem">rem</option>
                <option value="em">em</option>
                <option value="%">%</option>
              </select>
            </div>

            <div className="flex items-center">
              <div className="text-sm text-gray-500 ml-3 px-2">Y</div>
              {/* Number Input (Editable) */}
              <input
                type="number"
                value={moveSizey}
                onChange={(e) => setMoveSizey(Number(e.target.value))}
                className="w-10 text-left pl-2 bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none rounded-l-md"
              />

              {/* Unit Selector */}
              <select
                value={unitMovey}
                onChange={(e) => setUnitMovey(e.target.value)}
                className="p-1 px-1 border-l-[2px] border-[var(--border)] uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
              >
                <option value="px">px</option>
                <option value="rem">rem</option>
                <option value="em">em</option>
                <option value="%">%</option>
              </select>
            </div>
          </div>
        </div>

        {/* Skew  */}
        <div className="flex uppercase items-center mt-1 justify-between">
          {/* Label */}

          <div className="text-sm flex items-center text-gray-300 mr-2">
            <TbSkewY className="text-sm text-gray-500 mr-2" />
            skew
          </div>

          {/* Controls */}
          <div className="flex items-center rounded-md">
            <div className="flex items-center">
              <div className="text-sm text-gray-500 px-2">X</div>
              {/* Number Input (Editable) */}
              <input
                type="number"
                value={skewSizex}
                onChange={(e) => setSkewSizex(Number(e.target.value))}
                className="w-10 text-left pl-2 bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none rounded-l-md"
              />

              {/* Unit Selector */}
              <select
                value={unitSkewx}
                onChange={(e) => setUnitSkewx(e.target.value)}
                className="p-1 px-1 border-l-[2px] border-[var(--border)] uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
              >
                <option value="px">px</option>
                <option value="rem">rem</option>
                <option value="em">em</option>
                <option value="%">%</option>
              </select>
            </div>

            <div className="flex items-center">
              <div className="text-sm text-gray-500 ml-3 px-2">Y</div>
              {/* Number Input (Editable) */}
              <input
                type="number"
                value={skewSizey}
                onChange={(e) => setSkewSizey(Number(e.target.value))}
                className="w-10 text-left pl-2 bg-[var(--subboard)] text-[0.8em] text-gray-300 p-1 outline-none rounded-l-md"
              />

              {/* Unit Selector */}
              <select
                value={unitSkewy}
                onChange={(e) => setUnitSkewy(e.target.value)}
                className="p-1 px-1 border-l-[2px] border-[var(--border)] uppercase bg-[var(--subboard)] text-[0.8em] text-gray-500 hover:bg-[var(--light)] transition duration-300 ease-in-out  hover:text-[var(--main)] rounded-r-md"
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
    </div>
  );
}

export default Transform;
