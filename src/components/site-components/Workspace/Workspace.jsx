import React, { useState } from "react";

import Border from "./Toolbar/Border";
import Background from "./Toolbar/Background";
import Shadow from "./Toolbar/Shadow";
import Text from "./Toolbar/Text";

function Workspace() {
  return (
    <div className="flex uppercase jet-normal bg-[var(--main)] h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <div className="basis-1/4 m-4 bg-[var(--board)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex-col pl-4 p-3">
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
      </div>

      {/* Main Content */}
      <div className="basis-3/4 flex flex-col">
        {/* Top Section */}
        <div className="basis-6/9 my-4 mr-4 bg-[var(--subboard)] justify-center border-[1px] border-[var(--border)] rounded-xl flex pl-4 p-3">
          <div className="jet-bold text-[0.7em] text-center text-[var(--border)]">
            - component preview -
          </div>
        </div>

        {/* Bottom Section */}
        <div className="basis-3/9 mr-4 mb-4 bg-[var(--subboard)] border-[1px] border-[var(--border)] rounded-xl shadow-2xl flex pl-4 p-3 justify-center">
          <div className="jet-bold text-[0.7em] text-center text-[var(--border)]">
            - code -
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
