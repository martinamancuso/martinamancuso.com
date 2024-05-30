"use client";

import { Introduction } from "./introduction";
import { Skills } from "./skills";
import { Career } from "./career";
import { Button } from "../ui/button";

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
    <>
      <div className="container">
        <p className="font-extrabold text-3xl mb-16">About Me</p>
        <Introduction />
      </div>
      <div className="bg-white">
        <div className="container">
          <Skills />
        </div>
      </div>
      <div className="container">
        <Career />
      </div>
      {/* <div className="pb-16 lg:pb-24">
        <hr />
      </div> */}
      <div className="container">
        <div className="w-full h-auto flex justify-center items-center">
          <Button onClick={downloadCv}>Download CV</Button>
        </div>
      </div>
    </>
  );
}
