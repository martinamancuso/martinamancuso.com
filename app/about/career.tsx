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

  return (
    <>
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
    </>
  );
}
