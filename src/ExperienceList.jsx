import ExperienceItem from "./ExperienceItem";
import { v4 as uuidv4 } from "uuid";

export default function ExperienceList() {
  const experiences = [
    {
      id: uuidv4(),
      title: "English Teacher",
      subTitle: "2019 - 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: uuidv4(),
      title: "English Teacher",
      subTitle: "2020 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
