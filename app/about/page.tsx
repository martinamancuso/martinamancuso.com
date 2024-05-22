import Image from "next/image";
import MartinaMancusoPhoto from "./MartinaMancusoPhoto.jpg";

export default function About() {
  return (
    <>
      <div className="flex flex-col h-full w-full px-4">
        <p>About Me</p>
        <Image
          src={MartinaMancusoPhoto}
          alt="martina mancuso photo"
          width={300}
          height={200}
        />
        <p>Junior Full-Stack Developer</p>
        <hr />
        <div className="text-justify">
          <p>
            «As you leave for Ithaca I hope your road is long, full of
            adventures, full of discovery.»
          </p>
          <p>
            I choose to give a turn in my life, devoting myself to the study of
            web development after having worked for almost 5 years in the world
            of customer service.
          </p>
          <p>
            I start this adventure with Develhope, taking the first steps
            towards JavaScript, HTML, CSS, React, TypeScript, SQL, Node.js, step
            by step, pixel by pixel.
          </p>
          <p>
            Thanks to Develhope and my previous experience, I have developed the
            ability to work in teams, to look for creative solutions together
            with my colleagues and to focus tenaciously on the goals we have
            set, in the short and long term.
          </p>
          <p>
            I am passionate about Communication and Psychology and I believe in
            "please" and "thank you".
          </p>
        </div>
        <hr />
      </div>
    </>
  );
}
