import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Demo from "./Demo";

function Workspace() {
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
    <div className="flex uppercase jet-normal bg-[var(--main)] h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <div className="basis-1/4 m-4 bg-[var(--board)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex-col pl-4 p-3">
        <div className="jet-bold text-[0.7em] text-center text-[var(--border)]">
          - toolbar -
        </div>
        <div>
          <div className="text-[var(--light)] flex-col">
            BACKGROUND
            <hr className="border-[var(--light)] mb-3"></hr>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-300 mr-2">COLOR</div>
            <div className="items-center flex">
              <div className="scale-[0.8]">
                <Demo />
              </div>
              <div className="bg-[var(--subboard)] gap-[0.3em] p-1 rounded-[8px] flex">
                <div className="h-[1.3em] w-[1.3em] rounded-[6px] bg-blue-500"></div>
                <div className="h-[1.3em] w-[1.3em] rounded-[6px] bg-red-400"></div>
                <div className="h-[1.3em] w-[1.3em] rounded-[6px] bg-yellow-400"></div>
                <div className="h-[1.3em] w-[1.3em] rounded-[6px] bg-blue-500"></div>
                <div className="h-[1.3em] w-[1.3em] rounded-[6px] bg-red-400"></div>
              </div>
            </div>
          </div>
          {/* <hr className="border-[var(--border)] my-2 mx-6"></hr> */}
          <div className="flex items-center mt-1 justify-between">
            <div className="text-sm text-gray-300 mr-2">image</div>
            {/* <div> */}
            <hr className="border-[var(--border)] w-auto"></hr>
            {/* </div> */}
            <div className="flex">
              <div className="flex items-center jets-light bg-[var(--subboard)] rounded-[8px] text-sm">
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
              <div className="flex ml-1 items-center jets-light bg-[var(--subboard)] p-1 text-gray-500 rounded-[8px]">
                <IoClose />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-1 justify-between">
            <div className="text-sm text-gray-300 mr-2">pattern</div>
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

      {/* Main Content */}
      <div className="basis-3/4 flex flex-col">
        {/* Top Section */}
        <div className="basis-6/9 my-4 mr-4 bg-[var(--subboard)] justify-center border-[1px] border-[var(--border)] rounded-xl flex pl-4 p-3">
          <div className="jet-bold text-[0.7em] text-center text-[var(--border)]">
            - component preview -
          </div>
        </div>

        {/* Bottom Section */}
        <div className="basis-3/9 mr-4 mb-4 bg-[var(--subboard)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex pl-4 p-3 justify-center">
          <div className="jet-bold text-[0.7em] text-center text-[var(--border)]">
            - code -
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
