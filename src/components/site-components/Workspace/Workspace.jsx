import React, { useState } from "react";

import Border from "./Toolbar/Border";
import Background from "./Toolbar/Background";
import Shadow from "./Toolbar/Shadow";
import Text from "./Toolbar/Text";
import Transform from "./Toolbar/Transform";
import ComponentPreview from "./Component-Preview/ComponentPreview";
import CodeArea from "./CodeArea/CodeArea";

function Workspace() {
  return (
    <div className="flex overscroll-none uppercase jet-normal bg-[var(--main)] h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <div className="basis-1/4 m-4  bg-[var(--board)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex-col pl-4 p-3">
        <div className="jet-bold select-none text-[0.7em] text-center text-[var(--border)]">
          - toolbar -
        </div>

        {/* Background Section */}
        <Background />

        {/* Border Section */}
        <Border />

        {/*Shadow Section */}
        <Shadow />

        {/*Text Section */}
        <Text />

        {/*Transform Section */}
        <Transform />
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
            <ComponentPreview />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="basis-3/9 mr-4 mb-4 bg-[var(--subboard)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex flex-col h-full flex p-3 justify-center">
          <div className="jet-bold text-[0.7em] text-center mb-2 text-[var(--border)]">
            - code -
          </div>

          <div className="flex-1 items-center overflow-hidden">
            <CodeArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
