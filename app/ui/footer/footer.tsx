import Image from "next/image";
import github from "./social-icons/github.png";
import linkedin from "./social-icons/linkedin.png";

export function Footer() {
  return (
    <div className="hidden lg:flex">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/martinamancuso/"
      >
        <Image src={linkedin} alt="linkedin logo" className="mr-3 hover:opacity-70" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/martinamancuso"
      >
        <Image src={github} alt="github logo" className="hover:opacity-70"/>
      </a>
    </div>
  );
}
