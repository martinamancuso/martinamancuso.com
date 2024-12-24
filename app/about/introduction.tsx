import Image from "next/image";
import MartinaMancusoPhoto from "./martina-mancuso-photo.jpg";
import MartinaMancusoPhotoDesktop from "./martina-mancuso-photo-desktop.jpg";

export function Introduction() {
  return (
    <>
      <div className="mb-9">
        <Image
          src={MartinaMancusoPhoto}
          alt="martina mancuso photo"
          className="md:hidden rounded"
        />
        <Image
          src={MartinaMancusoPhotoDesktop}
          alt="martina mancuso photo"
          className="hidden md:block rounded"
        />
      </div>
      <p className="font-bold text-xl">Martina Mancuso</p>
      <p className="text-greyText text-sm pb-5">Junior Web Developer</p>
      <div className="text-greyText border-greyBorders border-t text-sm text-justify pt-7 pb-24 flex flex-col gap-5">
        <p>
        «As you set out for Ithaka hope your road is a long one, full of adventure, full of discovery.»
        </p>
        <p>
        I am passionate about communication in all its forms, 
        from coding to interpersonal skills. 
        I am also deeply interested in personal growth and psychology, 
        and I believe in the power of words like &quot;please&quot; and &quot;thank you&quot;.
        </p>
        <p>
        Through my studies and work experience, I have learned how to collaborate in teams, 
        find creative solutions, and stay focused on achieving both short and long-term goals.
        </p>
        <p>
        Feel free to reach out, I would love to exchange ideas!
        </p>
      </div>
    </>
  );
}
