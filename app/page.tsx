"use client";

import { Button } from "./ui/button/button";
import Image from "next/image";
import MartinaMancusoSquare from "./martina-mancuso-square.jpg";
import { AnimatedText } from "./ui/animated-text/animated-text";

export default function Home() {
  function handleContactForm() {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = "https://fvxbhxqrrxf.typeform.com/to/BZ3YKWsW";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const martinasWords = ["Developer", "Dreamer", "Thinker", "Empathetic"];

  return (
    <div className="container pt-20 lg:pt-0 flex flex-col lg:flex-row items-center lg:h-full">
      <div className="flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row lg:items-center lg:w-full">
        <div className="lg:grow">
          <div className="font-bold text-3xl tracking-wide lg:text-4xl xl:text-5xl flex flex-col gap-3 text-center lg:text-left">
            <p>Hi, I'm Martina!</p>
            <p>
              Full-Stack&nbsp;
                <AnimatedText texts={martinasWords} />
            </p>
            <p>Based in Italy</p>
          </div>
          <div className="pt-9 lg:pt-11 text-center lg:text-left">
            <Button onClick={handleContactForm}>Contact me</Button>
          </div>
        </div>
        <div>
          <Image
            src={MartinaMancusoSquare}
            alt="martina mancuso photo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
