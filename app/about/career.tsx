import Image from "next/image";
import liItemStar from "./li-item-star.png";

export function Career() {
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

  function renderList(experiences: String[]) {
    return (
      <ul className="text-[#767676] text-sm">
        {experiences.map((experience, index) => (
          <li key={index} className="flex items-center pb-2">
            <Image
              src={liItemStar}
              alt="star"
              width={10}
              height={10}
              className="mr-1"
            />
            {experience}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="py-10">
        <p className="text-xl font-bold py-6">Experiences</p>
        <div>
          <p className="font-semibold text-base pb-2">Develhope</p>
          <p className="text-sm pb-1">Full-Stack Developer</p>
          {renderList(develhopeExperience)}
        </div>
        <div>
          <p className="font-semibold text-base pt-6 pb-2">UniCredit</p>
          <div>
            <p className="text-sm pb-1">AI Chatbot Analyst</p>
            {renderList(chatbotExperience)}
          </div>
          <div>
            <p className="text-sm pt-3 pb-1">
              Customer Care & Sales Specialist
            </p>
            {renderList(customerCareExperience)}
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold lg:pt-16">Education</p>
        <div>
          <p className="font-semibold text-base pt-6 pb-2">Develhope</p>
          {renderList(develhopeEducation)}
        </div>
        <div>
          <p className="font-semibold text-base pt-6 pb-2">
            Università di Pisa
          </p>
          {renderList(pisaEducation)}
        </div>
        <div>
          <p className="font-semibold text-base pt-6 pb-2">
            Università di Milano
          </p>
          {renderList(milanoEducation)}
        </div>
        <div>
          <p className="font-semibold text-base pt-6 pb-2">
            Università di Palermo
          </p>
          {renderList(palermoEducation)}
        </div>
      </div>
    </>
  );
}
