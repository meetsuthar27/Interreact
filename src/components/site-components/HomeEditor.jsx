/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function HomeEditor() {
  return (
    <div className="h-[50em] flex jet-normal uppercase border-1 w-full  bg-[var(--darkmain)] px-4 py-3 rounded-xl border-[var(--border)]">
      {/* Left: Component Preview Area */}
      <div className="w-1/2 text-white flex flex-col">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-600 pb-2">
          {["Buttons", "Cards", "Forms", "Navbars"].map((tab) => (
            <p
              key={tab}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {tab}
            </p>
          ))}
        </div>

        {/* Component Preview Space */}
        <div className="flex flex-grow items-center justify-center">
          <p className="text-gray-500">[Rendered Component Preview]</p>
        </div>
      </div>

      {/* Right: Controls + Code Area */}
      <div className="w-1/2 flex flex-col">
        {/* Controls Section (Top 70%) */}
        <div className="flex-1 p-4 border-b border-gray-300"></div>

        {/* Code Preview (Bottom 30%) */}
        <div className="h-[30%] bg-gray-900 text-white p-4 overflow-auto">
          <h2 className="jet-normal text-lg text-gray-400">Generated Code</h2>
          <pre className="text-sm mt-2 bg-gray-800 p-2 rounded">
            {
              "<button class='bg-blue-500 text-white px-4 py-2 rounded'>Click Me</button>"
            }
          </pre>
        </div>
      </div>
    </div>
  );
}

export default HomeEditor;
