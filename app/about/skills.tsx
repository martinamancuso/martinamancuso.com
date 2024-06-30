import Image from "next/image";
import liItemStar from "./li-item-star.png";

export function Skills() {
  const techSkills = [
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "AngularJS",
    "Node.js and NPM",
    "Git Versioning System",
    "REST API",
    "SQL and PostgreSQL",
    "Agile Methodology",
    "Google Dialogflow",
    "Draw.io",
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
              className="mr-2"
            />
            {skill}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="py-24 flex flex-col lg:flex-row gap-y-14">
        <div className="font-semibold lg:w-1/2">
          <p className="text-xl font-bold mb-10">Tech Skills</p>
          <div>{renderList(techSkills)}</div>
        </div>

        <div className="lg:w-1/2">
          <div className="font-semibold pb-14">
            <p className="text-xl font-bold mb-10">Soft Skills</p>
            <div>{renderList(softSkills)}</div>
          </div>
          <div className="font-semibold">
            <p className="text-xl font-bold mb-10">Hobbies</p>
            <div>
              <div>{renderList(hobbies)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
