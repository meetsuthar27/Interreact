import React, { useState } from "react";

import Border from "./Toolbar/Border";
import Background from "./Toolbar/Background";
import Shadow from "./Toolbar/Shadow";
import Text from "./Toolbar/Text";
import Transform from "./Toolbar/Transform";
import ComponentPreview from "./Component-Preview/ComponentPreview";
import CodeArea from "./CodeArea/CodeArea";

function Workspace() {
  const [componentProps, setComponentProps] = useState({
    background: {
      color: "#ffffff",
      image: null,
      pattern: "coming soon",
    },
    border: {
      type: "solid",
      color: "#ffffff",
      width: "2px",
      radius: "2px",
    },
    shadow: {
      type: "normal",
      color: "#ffffff",
      x: "0px",
      y: "-10px",
      blur: "10px",
    },
    text: {
      content: "Hello",
      color: "#ffffff",
      size: "10px",
      style: "mono",
      alignment: "left",
      decoration: "none",
      list: "none",
      letterSpacing: "normal",
    },
    transform: {
      scale: "100%",
      rotate: "0deg",
      moveX: "0px",
      moveY: "0px",
      skewX: "0px",
      skewY: "0px",
    },
  });

  console.log(componentProps);

  return (
    <div className="flex overscroll-none uppercase jet-normal bg-[var(--main)] h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <div className="basis-1/4 m-4  bg-[var(--board)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex-col pl-4 p-3 overflow-scroll">
        <div className="jet-bold select-none text-[0.7em] text-center text-[var(--border)]">
          - toolbar -
        </div>
        <div className="flex flex-col ">
          {/* Background Section */}
          <Background setComponentProps={setComponentProps} />

          {/* Border Section */}
          <Border setComponentProps={setComponentProps} />

          {/*Shadow Section */}
          <Shadow setComponentProps={setComponentProps} />

          {/*Text Section */}
          <Text setComponentProps={setComponentProps} />

          {/*Transform Section */}
          <Transform setComponentProps={setComponentProps} />
        </div>
      </div>

      {/* Main Content */}
      <div className="basis-3/4 flex flex-col">
        {/* Top Section */}
        <div className="basis-6/9 my-4 mr-4 bg-[var(--subboard)] justify-center border-[1px] border-[var(--border)] rounded-xl p-3 flex flex-col h-full">
          {/* Title */}
          <div className="jet-bold text-[0.7em] mb-2 text-center text-[var(--border)]">
            - component preview -
          </div>

          {/* Preview Container (Prevents Overflow) */}
          <div className="flex-1 items-center overflow-hidden">
            <ComponentPreview componentProps={componentProps} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="basis-3/9 mr-4 mb-4 bg-[var(--subboard)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex flex-col h-full flex p-3 justify-center">
          <div className="jet-bold text-[0.7em] text-center mb-2 text-[var(--border)]">
            - code -
          </div>

          <div className="flex-1 items-center overflow-hidden">
            <CodeArea componentProps={componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
