import Image from "next/image";
import MartinaMancusoPhoto from "./MartinaMancusoPhoto.jpg";
import liItemStar from "./li-item-star.png";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js and NPM",
    "Git Versioning System",
    "REST API",
    "SQL and PostgreSQL",
    "Agile Methodology",
    "Google Dialogflow",
    "Draw.io",
    "Tailwind",
  ];

  const softSkills = [
    "Time Management",
    "Effective Communication",
    "Perseverance",
    "Problem Solving",
    "Creativity",
  ];

  const hobbies = ["Technology", "Reading", "Writing"];

  return (
    <>
      <div className="flex flex-col w-full justify-around pb-7 lg:px-20">
        <div className="px-8">
          <p className="font-bold">About Me</p>
          <div className="py-6">
            <Image
              src={MartinaMancusoPhoto}
              alt="martina mancuso photo"
              width={300}
              height={200}
              className="pb-2"
            />
            <p className="font-medium">Martina Mancuso</p>
            <p className="font-medium">Junior Full-Stack Developer</p>
          </div>
          <hr />
          <div className="text-justify py-6">
            <p>
              «As you leave for Ithaca I hope your road is long, full of
              adventures, full of discovery.»
            </p>
            <br />
            <p>
              I choose to give a turn in my life, devoting myself to the study
              of web development after having worked for almost 5 years in the
              world of customer service.
            </p>
            <br />
            <p>
              I start this adventure with Develhope, taking the first steps
              towards JavaScript, HTML, CSS, React, TypeScript, SQL, Node.js,
              step by step, pixel by pixel.
            </p>
            <br />
            <p>
              Thanks to Develhope and my previous experience, I have developed
              the ability to work in teams, to look for creative solutions
              together with my colleagues and to focus tenaciously on the goals
              we have set, in the short and long term.
            </p>
            <br />
            <p>
              I am passionate about Communication and Psychology and I believe
              in "please" and "thank you".
            </p>
          </div>
        </div>
        <hr />
        <div className="bg-white px-8">
          <div className="py-6 bg-white">
            <div className="font-semibold">
              <p className="pb-2">Tech Skills</p>
              <div>
                <ul className="font-normal">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-center pb-2">
                      <Image
                        src={liItemStar}
                        alt="star"
                        width={10}
                        height={10}
                        className="mr-1"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-6">
              <div className="font-semibold">
                <p className="pb-2">Soft Skills</p>
                <div>
                  <ul className="font-normal">
                    {softSkills.map((skill, index) => (
                      <li key={index} className="flex items-center pb-2">
                        <Image
                          src={liItemStar}
                          alt="star"
                          width={10}
                          height={10}
                          className="mr-1"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">
                <p className="pb-2">Hobbies</p>
                <div>
                  <ul className="font-normal">
                    {hobbies.map((skill, index) => (
                      <li key={index} className="flex items-center pb-2">
                        <Image
                          src={liItemStar}
                          alt="star"
                          width={10}
                          height={10}
                          className="mr-1"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
