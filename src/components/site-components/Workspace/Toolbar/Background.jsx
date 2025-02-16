import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdInvertColors } from "react-icons/md";
import { PiWavesBold } from "react-icons/pi";
import { RiImageCircleFill } from "react-icons/ri";
import Demo from "../../Demo";

function Background() {
  const [fileName, setFileName] = useState("No file chosen");

  const truncateFileName = (name, maxLength = 28) => {
    if (name.length <= maxLength) return name;
    const firstPart = name.slice(0, 13); // First 16 characters
    const lastPart = name.slice(-9); // Last 12 characters
    return `${firstPart}...${lastPart}`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(truncateFileName(file.name));
    } else {
      setFileName("No file chosen");
    }
  };
  return (
    <div>
      <div className="select-none">
        <div className="text-[var(--light)] flex-col">
          BACKGROUND
          <hr className="border-[var(--light)] mb-3"></hr>
        </div>
        <div className="flex items-center justify-between">
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
        {/* <hr className="border-[var(--border)] my-2 mx-6"></hr> */}
        <div className="flex items-center mt-[0.16em] justify-between">
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <RiImageCircleFill className="text-sm text-gray-500 mr-2" />
            image
          </div>
          {/* <div> */}
          <hr className="border-[var(--border)] w-auto"></hr>
          {/* </div> */}
          <div className="flex">
            <div className="flex items-center jets-light bg-[var(--subboard)] rounded-md text-sm">
              {/* Hidden File Input */}
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />

              {/* Custom Upload Button */}
              <label
                htmlFor="fileInput"
                className="cursor-pointer bg-[var(--darkmain)] text-gray-300 uppercase p-1 px-2 text-[0.8em] rounded-md hover:bg-opacity-80 transition"
              >
                Choose File
              </label>

              {/* Display Selected File Name */}
              <span className="text-gray-500  p-1 px-2 text-[0.8em]">
                {fileName}
              </span>
            </div>
            <div className="flex ml-1 cursor-pointer items-center jets-light bg-[var(--subboard)] p-1 text-gray-500 rounded-md">
              <IoClose />
            </div>
          </div>
        </div>

        <div className="flex items-center mt-1 justify-between">
          <div className="text-sm flex items-center text-gray-300 mr-2">
            <PiWavesBold className="text-sm text-gray-500 mr-2" />
            pattern
          </div>
          <div className="cursor-pointer bg-[var(--subboard)] items-center text-[0.8em] p-1 text-gray-300 uppercase rounded-md">
            <select
              disabled
              // value={selectedType}
              // onChange={(e) => setSelectedType(e.target.value)}
              className="cursor-not-allowed text-gray-500 text-[0.8em] uppercase rounded-md"
            >
              <option value="Select Input Type" disabled>
                Select Input Type
              </option>
              <option value="image">COMING SOON</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
