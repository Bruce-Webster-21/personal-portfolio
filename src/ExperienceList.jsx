import ExperienceItem from "./ExperienceItem";
import { v4 as uuidv4 } from "uuid";

export default function ExperienceList() {
  const experiences = [
    {
      id: uuidv4(),
      title: "Language Teacher",
      subTitle:
        "Academia de lenguas (2019 - 2020)" +
        <br /> +
        "Sapienza Academy (2019 - 2020)",
      description:
        "I taught English, Spanish, and Italian in the Dominican Republic, providing language education in this diverse and vibrant country.",
    },
    {
      id: uuidv4(),
      title: "Sapienza Academy",
      subTitle: "Language Teacher (2020 - 2023)",
      description:
        "I taught English, Spanish, and Italian in the Dominican Republic, providing language education in this diverse and vibrant country.",
    },
    {
      id: uuidv4(),
      title: "Sapienza Academy",
      subTitle: "Language Teacher (2020 - 2023)",
      description:
        "I taught English, Spanish, and Italian in the Dominican Republic, providing language education in this diverse and vibrant country.",
    },
  ];

  return (
    <div id="experience">
      {experiences.map(({ id, title, subTitle, description }) => (
        <ExperienceItem
          key={id}
          title={title}
          subTitle={subTitle}
          description={description}
        />
      ))}
    </div>
  );
}
