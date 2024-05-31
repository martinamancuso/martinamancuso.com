import Image from "next/image";
import MartinaMancusoPhoto from "./MartinaMancusoPhoto.jpg";
import MartinaMancusoPhotoDesktop from "./MartinaMancusoPhotoDesktop.jpg";

export function Introduction() {
  return (
    <>
      <div className="mb-9">
        <Image
          src={MartinaMancusoPhoto}
          alt="martina mancuso photo"
          className="md:hidden"
        />
        <Image
          src={MartinaMancusoPhotoDesktop}
          alt="martina mancuso photo"
          className="hidden md:block"
        />
      </div>
      <p className="font-bold text-xl">Martina Mancuso</p>
      <p className="text-[#767676] text-sm pb-5">Junior Full-Stack Developer</p>
      <div className="text-[#767676] border-[#dfdfdf] border-t text-sm text-justify pt-7 pb-24 flex flex-col gap-5">
        <p>
          «As you leave for Ithaca I hope your road is long, full of adventures,
          full of discovery.»
        </p>
        <p>
          I choose to give a turn in my life, devoting myself to the study of
          web development after having worked for almost 5 years in the world of
          customer service.
        </p>
        <p>
          I start this adventure with Develhope, taking the first steps towards
          JavaScript, HTML, CSS, React, TypeScript, SQL, Node.js, step by step,
          pixel by pixel.
        </p>
        <p>
          Thanks to Develhope and my previous experience, I have developed the
          ability to work in teams, to look for creative solutions together with
          my colleagues and to focus tenaciously on the goals we have set, in
          the short and long term.
        </p>
        <p>
          I am passionate about Communication and Psychology and I believe in
          "please" and "thank you".
        </p>
      </div>
    </>
  );
}
