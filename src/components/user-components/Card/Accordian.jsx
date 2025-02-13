import { useState } from "react";

const Accordion = ({
  bgColor,
  textColor,
  borderStyle,
  borderColor,
  borderWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ "--bg-color": bgColor }}
      className={`p-4 bg-[var(--bg-color)] ${textColor} border-${borderWidth} border-${borderStyle} border-${borderColor} rounded-md w-96`}
    >
      <button
        className="w-full text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        Click to {isOpen ? "Close" : "Expand"}
      </button>
      {isOpen && <p className="mt-2">This is an example accordion content.</p>}
    </div>
  );
};

export default Accordion;
