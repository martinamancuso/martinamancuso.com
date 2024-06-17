import Image from "next/image";
import MartinaMancusoSquare from "./martina-mancuso-square.png";
import { AnimatedText } from "./ui/animated-text/animated-text";
import type { Metadata } from "next";
import ContactMeButton from "./contact-me-button";

export const metadata: Metadata = {
  title: "Martina Mancuso - Full-Stack Developer",
  description:
    "Discover Martina Mancuso, an Italian Full-Stack Developer. Easily contact me, explore the blog, and connect on LinkedIn and GitHub. Welcome to my personal site!",
};

export default function Home() {
  const martinasWords = ["Developer", "Dreamer", "Thinker"];

  return (
    <div className="container pt-20 lg:pt-0 flex flex-col lg:flex-row items-center lg:h-full">
      <div className="flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row lg:items-center lg:w-full">
        <div className="lg:grow text-center lg:text-left">
          <div className="font-bold text-3xl tracking-wide lg:text-3xl xl:text-4xl 2xl:text-5xl flex flex-col gap-3">
            <p>Hi, I&apos;m Martina!</p>
            <p>
              Full-Stack&nbsp;
              <AnimatedText texts={martinasWords} />
            </p>
            <p>Based in Italy</p>
          </div>
          <div className="pt-9 tracking-wider">
            {/* <p className="leading-relaxed">
              Not just a developer: <br />
              I am also an empathetic, curious person
            </p> */}
            <p className="leading-relaxed">
            My qualities: <br/>
            listening, empathy, curiosity.
            </p>
          </div>
          <div className="pt-9 lg:pt-11">
            <ContactMeButton />
          </div>
        </div>
        <Image
          src={MartinaMancusoSquare}
          width={400}
          height={400}
          alt="martina mancuso photo"
          className="w-96 h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
        />
      </div>
    </div>
  );
}
