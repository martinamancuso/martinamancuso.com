"use client";

import Image from "next/image";
import liItemStar from "./li-item-star.png";
import { Introduction } from "./introduction";
import { Skills } from "./skills";

export default function About() {
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
        <p className="font-bold text-3xl">About Me</p>
        <Introduction />
      </div>
      <div className="bg-white px-8 lg:px-20">
        <Skills />
      </div>
      <div className="px-8 pb-7 lg:flex lg:flex-row justify-around">
        {/* CAREER - START */}
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
        {/* CAREER - END */}
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
