"use client";

import { Button } from "./ui/button/button";

export default function ContactMeButton() {
  function handleContactForm() {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = "https://fvxbhxqrrxf.typeform.com/to/BZ3YKWsW";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return <Button onClick={handleContactForm}>Contact me</Button>;
}
