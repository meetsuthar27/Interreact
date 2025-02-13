import React from "react";
import Demo from "./Demo";

function Workspace() {
  return (
    <div className="flex uppercase jet-normal bg-[var(--main)] h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <div className="basis-1/4 m-4 bg-[var(--board)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex pl-4 p-3">
        <div>
          <div className="text-[var(--light)] flex-col">
            BACKGROUND
            <hr className="border-[var(--light)] mb-3"></hr>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-300 mr-2">COLOR</div>
            <div className="scale-[0.9] items-center flex">
              <Demo />
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-blue-500"></div>
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-red-400"></div>
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-yellow-400"></div>
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-gray-700"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-300 mr-2">border</div>
            <div className="scale-[0.9] items-center flex">
              <Demo />
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-blue-500"></div>
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-red-400"></div>
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-yellow-400"></div>
              <div className="h-[26px] mx-1 w-[26px] rounded-[6px] border-[3px] border-gray-300 bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="basis-3/4 flex flex-col">
        {/* Top Section */}
        <div className="basis-6/9 my-4 mr-4 bg-[var(--subboard)] border-[1px] border-[var(--border)] rounded-xl flex items-center justify-center">
          Hey
        </div>

        {/* Bottom Section */}
        <div className="basis-3/9 mr-4 mb-4 bg-[var(--subboard)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex items-center justify-center">
          Hello
        </div>
      </div>
    </div>
  );
}

export default Workspace;
