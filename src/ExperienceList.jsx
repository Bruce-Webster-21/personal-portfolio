import ExperienceItem from "./ExperienceItem";
import { v4 as uuidv4 } from "uuid";

export default function ExperienceList() {
  const experiences = [
    {
      id: uuidv4(),
      title: "Language Teacher",
      time: "2019 - 2020",
      subTitle: "Academia de lenguas",
      description:
        "I taught English, Spanish, and Italian in the Dominican Republic, providing language education in this diverse and vibrant country.",
    },
    {
      id: uuidv4(),
      title: "Language Teacher",
      time: "2019 - 2020",
      subTitle: "Sapienza Academy",
    },
    {
      id: uuidv4(),
      title: "web developer",
      time: "2020 - present",
      subTitle: "Freelance",
      description:
        "I have primarily worked with HTML5, CSS, and vanilla JavaScript but continuously expanded my skill set by delving into technologies like React, PHP, and both relational and nonrelational databases.",
    },
  ];

  return (
    <div className="experience" id="experience">
      {experiences.map(({ id, title, time, subTitle, description }) => (
        <ExperienceItem
          key={id}
          title={title}
          time={time}
          subTitle={subTitle}
          description={description}
        />
      ))}
    </div>
  );
}
