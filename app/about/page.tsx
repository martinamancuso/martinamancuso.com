"use client";

import Head from "next/head";
import { Introduction } from "./introduction";
import { Skills } from "./skills";
import { Career } from "./career";
import { Button } from "../ui/button/button";
import { PageTitle } from "../ui/page-title/page-title";

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
    <div className="page-container">
      <Head>
        <title>About Martina Mancuso - Full Stack Developer</title>
        <meta
          name="description"
          content="Meet Martina Mancuso: a Full Stack Developer passionate about technology, reading, writing, psychology and personal growth. Explore my experiences and download my CV."
        />
      </Head>
      <div className="container">
        <PageTitle>About Me</PageTitle>
        <Introduction />
      </div>
      <div className="bg-white w-full">
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
    </div>
  );
}
