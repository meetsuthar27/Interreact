import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCheck, FiClipboard } from "react-icons/fi";

function CodeArea() {
  const codeText = `<div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button></div<div className="flex justify-center items-center h-screen bg-gray-200"><button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button></div<div className="flex justify-center items-center h-screen bg-gray-200"><button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Click Me</button>
  </div>

  `;

  const [isCopied, setIsCopied] = useState(false); // Track copy state

  // Copy Code Function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeText); // Copy text
    setIsCopied(true); // Show checkmark
    setTimeout(() => setIsCopied(false), 3000); // Reset after 2 seconds
  };

  return (
    <div className="relative normal-case jet-normal h-[100%] w-full text-sm border-[1px] border-[var(--border)] rounded-md bg-[#292c33] overflow-auto">
      {/* Copy Button */}
      {/* <div className="static"> */}
      <div className="absolute">
        <button
          className={`fixed bottom-10 right-10 z-10 p-2 border-[1px] rounded-md transition
          ${
            isCopied
              ? "bg-[var(--subboard)] text-green-500 border-[var(--border3)]"
              : "bg-[var(--subboard)] border-[var(--border3)] text-[var(--border3)] hover:bg-gray-600"
          }
        `}
          onClick={copyToClipboard}
        >
          {isCopied ? <FiCheck className="text-green-500" /> : <FiClipboard />}
        </button>
        {/* </div> */}
        <SyntaxHighlighter
          language="jsx"
          style={oneDark}
          wrapLines={true}
          customStyle={{
            background: "#292c33",
          }}
        >
          {codeText}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeArea;
