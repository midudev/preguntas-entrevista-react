"use client"
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className="w-10 h-5 p-1 cursor-pointer flex items-center justify-between relative rounded-full"
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#121212" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className="w-[15px] h-[15px] absolute rounded-full"
        style={
          theme === "dark"
            ? { left: 1, background: "#000000" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;