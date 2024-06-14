"use client";

import { Button } from "../ui/button/button";

export default function DownloadCvButton() {
  function downloadCv() {
    const link = document.createElement("a");
    link.href = "/Martina_Mancuso_Resume.pdf";
    link.download = "Martina_Mancuso_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return <Button onClick={downloadCv}>Download CV</Button>;
}
