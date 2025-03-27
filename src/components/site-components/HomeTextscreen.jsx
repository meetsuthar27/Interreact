import React from "react";
import ShinyText from "../react-bits/ShinyText";

function HomeEditor() {
  return (
    <div className="flex items-center justify-center border-1 w-full  bg-[var(--darkmain)] p-4 py-6 rounded-xl border-[var(--border)] uppercase">
      <div className="flex flex-col ">
        <h1 className="jet-normal flex text-4xl text-white">
          WELCOME <span className="jet-light mx-2">TO</span>{" "}
          <div className="jet-bold">
            <ShinyText
              text="interreact"
              disabled={false}
              speed={2}
              className="custom-class"
            />
          </div>
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
