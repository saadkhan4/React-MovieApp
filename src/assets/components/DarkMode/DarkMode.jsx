import React from "react";
import "./DarkMode.css";
import { useEffect } from "react";

// Try this first - simple import
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme","light")
  };
   
    useEffect(() => {
      setLightTheme();
    }, []);

  const toggleTheme = (event) => {
    if (event.target.checked) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const currentTheme = localStorage.getItem("theme") || "dark";

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={currentTheme === "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun icon" className="svg-icon" />
        <img src={Moon} alt="Moon icon" className="svg-icon" />
      </label>
    </div>
  );
};

export default DarkMode;
