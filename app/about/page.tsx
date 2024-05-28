"use client";

import { Introduction } from "./introduction";
import { Skills } from "./skills";
import { Career } from "./career";

export default function About() {
  function downloadCv() {
    const link = document.createElement("a");
    link.href = "/Martina_Mancuso_Resume.pdf";
    link.download = "Martina_Mancuso_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex flex-col w-full justify-around pb-7">
      <div className="px-8 lg:px-20">
        <p className="font-bold text-3xl">About Me</p>
        <Introduction />
      </div>
      <div className="bg-white px-8 lg:px-20">
        <Skills />
      </div>
      <div className="px-8 pb-7 lg:flex lg:flex-row justify-around">
        <Career />
      </div>
      <div className="px-20 pb-10">
        <hr />
      </div>
      <div className="px-8 w-full h-auto flex justify-center items-center">
        <button
          onClick={downloadCv}
          className="w-36 h-12 border border-slate-200 rounded-xl bg-[#84c0f6] text-white font-medium hover:opacity-70"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
