import Image from "next/image";
import liItemStar from "./li-item-star.png";

export function Skills() {
  const techSkills = [
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

  function renderList(skills: String[]) {
    return (
      <ul className="font-normal text-sm">
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
    );
  }

  return (
    <>
      <div className="py-6 justify-around lg:py-24 lg:flex">
        <div className="font-semibold mb-14">
          <p className="text-xl font-bold pt-24 mb-10">Tech Skills</p>
          <div>{renderList(techSkills)}</div>
        </div>
        <div className="py-6 lg:py-0 lg:flex lg:flex-col lg:justify-evenly">
          <div className="font-semibold mb-14">
            <p className="text-xl font-bold mb-10">Soft Skills</p>
            <div>{renderList(softSkills)}</div>
          </div>
          <div>
            <div className="font-semibold pb-12">
              <p className="text-xl font-bold pt-6 mb-10 lg:pt-0">Hobbies</p>
              <div>
                <div>{renderList(hobbies)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
