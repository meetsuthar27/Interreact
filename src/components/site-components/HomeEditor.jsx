/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function HomeEditor() {
  return (
    <div className="h-screen flex">
      {/* Left: Component Preview Area */}
      <div className="w-1/2 bg-black text-white p-4 flex flex-col">
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
        <div className="flex-1 p-4 border-b border-gray-300">
          <h2 className="jet-normal text-xl text-gray-800">Customize</h2>
          <div className="mt-4 flex gap-4">
            {/* Sample Input Controls */}
            <label className="text-gray-700">
              Color: <input type="color" className="ml-2" />
            </label>
            <label className="text-gray-700">
              Shadow: <input type="range" min="0" max="10" className="ml-2" />
            </label>
            <label className="text-gray-700">
              Border: <input type="range" min="0" max="10" className="ml-2" />
            </label>
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Edit in Workspace
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">
              More Components
            </button>
          </div>
        </div>

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
