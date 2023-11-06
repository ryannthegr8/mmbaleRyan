import React from "react";

import { useState } from "react";

//icons
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => setDark((prev) => !prev);

  return (
    <>
      <div title="Dark Mode" onClick={toggleDark} className="themeBtn">
        {dark ? (
          <MdLightMode style={{ color: "#ffff00" }} />
        ) : (
          <MdDarkMode style={{ color: "#000000" }} />
        )}
      </div>
    </>
  );
}

export default ThemeToggle;
