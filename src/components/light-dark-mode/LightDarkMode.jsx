import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="bg-white dark:bg-black">
      <div className=" wrapper">
        <h1 className="font-light dark:text-white">Hello World !</h1>
        <button
          className="px-3 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
          onClick={toggleDarkMode}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
