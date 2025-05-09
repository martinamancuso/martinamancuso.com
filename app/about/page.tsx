import { Introduction } from "./introduction";
import { Skills } from "./skills";
import { Career } from "./career";
import { PageTitle } from "../ui/page-title/page-title";
import type { Metadata } from "next";
import DownloadCvButton from "./download-cv-button";

export const metadata: Metadata = {
  title: "About Martina Mancuso - Web Developer",
  description:
    "Meet Martina Mancuso: a Web-Developer passionate about technology, reading, writing, psychology and personal growth. Explore my experiences and download my CV.",
};

export default function About() {
  return (
    <div className="page-container">
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
      <div className="container">
        <div className="w-full h-auto flex justify-center items-center">
          <DownloadCvButton />
        </div>
      </div>
    </div>
  );
}
