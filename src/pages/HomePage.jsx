import React from "react";
import HomeTextscreen from "../components/site-components/HomeTextscreen";
import HomeEditor from "../components/site-components/HomeEditor";

function HomePage() {
  return (
    <div className=" bg-[var(--main)]">
      <div className="pt-7 px-7">
        <HomeTextscreen />
      </div>
      <div className="pt-7 pb-7 px-7">
        <HomeEditor />
      </div>
    </div>
  );
}

export default HomePage;
