import React, { useState } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const ThemeSwitch = ({ label }) => {
  const [theme, setTheme] = useState("light");
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100 justify-center items-center"
    >
      {/* <div className="self-center justify-center content-center items-center text-center"> */}
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
      {/* </div> */}
    </button>
  );
};

export default ThemeSwitch;
