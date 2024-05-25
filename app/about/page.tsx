"use client";

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

  const develhopeExperience = [
    "Development of a Finance platform",
    "Design and development of a Gaming portal",
    "Human Development sessions",
  ];

  const chatbotExperience = [
    "Conversations analysis and testing",
    "Chatbot intents design and maintenance",
    "Data extraction and reporting",
  ];

  const customerCareExperience = [
    "Customer problems solving",
    "Customer needs interception",
    "Team working",
  ];

  const develhopeEducation = [
    "Daily live coding sessions and exercises",
    "Group projects using Agile methodology",
    "Self-study autonomy (Flipped Classroom learning methodology)",
  ];

  const pisaEducation = ["Postgraduate Master Course in Marketing Management"];

  const milanoEducation = ["Master's Degree in Communication Theories"];

  const palermoEducation = [
    "Bachelor's Degree in Communication for Media and Institutions",
  ];

  function downloadCv() {
    const link = document.createElement("a");
    link.href = "/Martina_Mancuso_Resume.pdf";
    link.download = "Martina_Mancuso_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex flex-col w-full justify-around pb-7">
      <div className="px-8 lg:px-20">
        <p className="font-bold">About Me</p>
        <div className="py-6">
          <Image
            src={MartinaMancusoPhoto}
            alt="martina mancuso photo"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="pb-2"
          />
          <p className="font-medium">Martina Mancuso</p>
          <p className="font-medium">Junior Full-Stack Developer</p>
        </div>
        <hr />
        <div className="text-justify pt-6 pb-12 flex flex-col gap-5">
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
      </div>
      <div className="bg-white px-8 lg:px-20">
        <div className="py-6 bg-white lg:flex justify-around">
          <div className="font-semibold">
            <p className="pt-7 pb-2">Tech Skills</p>
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
          <div className="py-6 lg:py-0 lg:flex lg:flex-col lg:justify-evenly">
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
            <div>
              <div className="font-semibold">
                <p className="pt-6 pb-2 lg:pt-0">Hobbies</p>
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
      </div>
      <div className="px-8 lg:flex lg:flex-row justify-around">
        <div className="py-10">
          <p className="font-semibold py-6">Experiences</p>
          <div>
            <p className="font-medium pb-2">Develhope</p>
            <p className="font-medium pb-1">Full-Stack Developer</p>
            <ul>
              {develhopeExperience.map((dev, index) => (
                <li key={index} className="flex items-center pb-2">
                  <Image
                    src={liItemStar}
                    alt="star"
                    width={10}
                    height={10}
                    className="mr-1"
                  />
                  {dev}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium pt-6 pb-2">UniCredit</p>
            <div>
              <p className="font-medium pb-1">AI Chatbot Analyst</p>
              <ul>
                {chatbotExperience.map((chat, index) => (
                  <li key={index} className="flex items-center pb-2">
                    <Image
                      src={liItemStar}
                      alt="star"
                      width={10}
                      height={10}
                      className="mr-1"
                    />
                    {chat}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium pt-3 pb-1">
                Customer Care & Sales Specialist
              </p>
              <ul>
                {customerCareExperience.map((customer, index) => (
                  <li key={index} className="flex items-center pb-2">
                    <Image
                      src={liItemStar}
                      alt="star"
                      width={10}
                      height={10}
                      className="mr-1"
                    />
                    {customer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold lg:pt-16">Education</p>
          <div>
            <p className="font-medium pt-6 pb-2">Develhope</p>
            <ul>
              {develhopeEducation.map((devEdu, index) => (
                <li key={index} className="flex items-center pb-2">
                  <Image
                    src={liItemStar}
                    alt="star"
                    width={10}
                    height={10}
                    className="mr-1"
                  />
                  {devEdu}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium pt-6 pb-2">Università di Pisa</p>
            <ul>
              {pisaEducation.map((pisaEdu, index) => (
                <li key={index} className="flex items-center pb-2">
                  <Image
                    src={liItemStar}
                    alt="star"
                    width={10}
                    height={10}
                    className="mr-1"
                  />
                  {pisaEdu}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium pt-6 pb-2">Università di Milano</p>
            <ul>
              {milanoEducation.map((milEdu, index) => (
                <li key={index} className="flex items-center pb-2">
                  <Image
                    src={liItemStar}
                    alt="star"
                    width={10}
                    height={10}
                    className="mr-1"
                  />
                  {milEdu}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium pt-6 pb-2">Università di Palermo</p>
            <ul>
              {palermoEducation.map((palEdu, index) => (
                <li key={index} className="flex items-center pb-2">
                  <Image
                    src={liItemStar}
                    alt="star"
                    width={10}
                    height={10}
                    className="mr-1"
                  />
                  {palEdu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-20 pb-10">
        <hr />
      </div>
      <div className="px-8 w-full h-auto flex justify-center items-center">
        <button
          onClick={downloadCv}
          className="w-36 h-12 border border-slate-200 rounded-xl bg-[#84c0f6] text-white font-medium hover:opacity-70"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
