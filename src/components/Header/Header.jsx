import React from "react";
import { useState } from "react";
import backgroundMobileLight from "/images/bg-mobile-light.jpg";
import backgroundDesktopLight from "/images/bg-desktop-light.jpg";
import backgroundMobileDark from "/images/bg-mobile-dark.jpg";
import backgroundDesktopDark from "/images/bg-desktop-dark.jpg";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";

export default function Header() {
  const [dark, setDark] = useState(false);
  const htmlEl = document.documentElement;

  const getBackgroundImage = () => {
    if (window.innerWidth < 768) {
      if (dark) {
        return backgroundMobileDark;
      } else {
        return backgroundMobileLight;
      }
    } else {
      if (dark) {
        return backgroundDesktopDark;
      } else {
        return backgroundDesktopLight;
      }
    }
  };

  return (
    <div className=" h-screen bg-[#FAFAFA] dark:bg-[#171823]">
      <div
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
        className=" h-[200px] w-[100vw] bg-cover md:"
      >
        <div className="flex justify-between items-center pt-12 w-[90%] max-w-[540px] mx-auto">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
            className=" text-white text-3xl font-semibold cursor-pointer"
          >
            TODO
          </a>
          <img
            onClick={() => {
              setDark(!dark);
              htmlEl.classList.toggle("dark");
            }}
            className="cursor-pointer hover:scale-125 transition-transform"
            src={dark ? sun : moon}
            alt="moon icon"
          />
        </div>
      </div>
    </div>
  );
}
