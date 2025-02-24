import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Import icons for the toggle button
import BadgeComponent from "../../../user-components/BadgeComponent";

function ComponentPreview() {
  const [isDark, setIsDark] = useState(true); // Track theme (default: dark)

  return (
    <div
      className={`relative h-[100%] p-4 w-full text-sm flex transiton justify-center items-center border-[1px] border-[var(--border)] rounded-md 
        ${isDark ? "pattern" : "pattern2"}`} // Switch patterns dynamically
    >
      {/* Toggle Button */}
      <button
        className={`absolute top-3 right-3 p-2 border-[1px] rounded-md transition
    ${
      isDark
        ? "bg-gray-800 hover:bg-[var(--light)] border-[var(--border)] text-[var(--light)] hover:text-[var(--main)]"
        : "bg-gray-300 hover:bg-[var(--main)] border-gray-500 text-gray-500 hover:text-[var(--light)]"
    }`}
        onClick={() => setIsDark(!isDark)} // Toggle dark/light mode
      >
        {isDark ? <FiSun /> : <FiMoon />}
      </button>

      {/* Badge Component */}
      <BadgeComponent />
    </div>
  );
}

export default ComponentPreview;
