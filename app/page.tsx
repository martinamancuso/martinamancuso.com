"use client";

import { Button } from "./ui/button/button";
import Image from "next/image";
import MartinaMancusoSquare from "./martina-mancuso-square.jpg";

export default function Home() {
  // lg:size-full lg:flex lg:justify-around
  return (
    <div className="container pt-20 flex lg:pt-0 lg:h-full">
      <div className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row lg:items-center lg:w-full">
        <div className="lg:grow">
          <div className="font-bold text-xl tracking-wide lg:text-5xl flex flex-col gap-3">
            <p>
              Hi, I'm <span className="text-primary">Martina!</span>
            </p>
            <p>Full-Stack Dreamer</p>
            <p>Based in Italy</p>
          </div>
          <div className="pt-11">
            <Button onClick={() => {}}>Contact me</Button>
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
