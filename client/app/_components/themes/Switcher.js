"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("business");
    } else {
      setTheme("lofi");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button className="btn btn-square btn-ghost">
      <label className="swap swap-rotate w-12 h-12">
        <input
          type="checkbox"
          onChange={handleToggle}
          // show toggle image based on localstorage theme
          checked={theme === "lofi" ? false : true}
        />
        <SunIcon className="w-8 h-8 swap-off" />
        <MoonIcon className="w-8 h-8 swap-on" />
      </label>
    </button>
  );
};

export default ThemeSwitcher;