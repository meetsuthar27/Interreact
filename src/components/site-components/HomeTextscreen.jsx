import React from "react";

function HomeEditor() {
  return (
    <div className="flex items-center justify-center uppercase">
      <div className="flex flex-col">
        <h1 className="jet-normal text-2xl text-white">
          WELCOME <span className="jet-light">TO</span> INTERREACT
        </h1>
        <h4 className="jet-light text-sm text-[var(--light)]">
          Build, Customize & Generate{" "}
          <span className="border-b-[1px]">React Components Effortlessly!</span>
        </h4>
      </div>
    </div>
  );
}

export default HomeEditor;
