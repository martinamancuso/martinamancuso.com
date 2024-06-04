"use client";

import { Button } from "./ui/button/button";
import Image from "next/image";
import MartinaMancusoSquare from "./martina-mancuso-square.jpg";

export default function Home() {
  return (
    <div className="container lg:size-full lg:flex lg:justify-around">
      <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
        <div>
          <div className="font-bold text-xl tracking-wide leading-loose lg:text-2xl">
            <p>
              Hi, I'm <span className="text-primary">Martina!</span>
            </p>
            <p>Junior Full-Stack Dreamer</p>
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
