import Image from "next/image";
import liItemStar from "./li-item-star.png";

export function Skills() {
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
      <div className="py-6 lg:flex justify-around">
        <div className="font-semibold">
          <p className="text-xl pt-7 pb-2">Tech Skills</p>
          <div>
            <ul className="font-normal text-sm text-[#767676]">
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
        <div className="py-6 lg:py-0 lg:flex lg:flex-col lg:justify-evenly">
          <div className="font-semibold">
            <p className="text-xl pb-2">Soft Skills</p>
            <div>
              <ul className="font-normal text-sm text-[#767676]">
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
          <div>
            <div className="font-semibold">
              <p className="text-xl pt-6 pb-2 lg:pt-0">Hobbies</p>
              <div>
                <ul className="font-normal text-sm text-[#767676]">
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
    </>
  );
}
