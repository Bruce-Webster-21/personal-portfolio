import ExperienceItem from "./ExperienceItem";

export default function ExperienceList() {
  const jobExperiences = [
    {
      id: crypto.randomUUID(),
      title: "english teacher",
      subTitle: "2019 - 2020",
      description: "lorem ipsum",
    },
    {
      id: crypto.randomUUID(),
      title: "english teacher",
      subTitle: "2020 - Present",
      description: "lorem ipsum",
    },
  ];
  return (
    <div id="experience">
      {jobExperiences.map((experience) => {
        return (
          <ExperienceItem
            key={experience.id}
            title={experience.title}
            subTitle={experience.subTitle}
            description={experience.description}
          />
        );
      })}
    </div>
  );
}
