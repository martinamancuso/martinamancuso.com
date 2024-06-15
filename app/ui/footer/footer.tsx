import Image from "next/image";
import githubIcon from "./social-icons/githubIcon.png";
import linkedinIcon from "./social-icons/linkedinIcon.png";

export function Footer() {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-3">
        <div className="flex flex-row justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/martinamancuso/"
          >
            <Image
              src={linkedinIcon}
              alt="linkedin logo"
              className="mr-3 hover:opacity-70"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/martinamancuso"
          >
            <Image
              src={githubIcon}
              alt="github logo"
              className="hover:opacity-70"
            />
          </a>
        </div>
        <div>
          <p className="tracking-wider">
            Made with <span className="text-primary">❤</span>
            <br />
            with Next.js & Tailwind
          </p>
        </div>
      </div>
    </>
  );
}
