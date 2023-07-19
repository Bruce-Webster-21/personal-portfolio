import ProjectItem from "./ProjectItem";
import projectImg1 from "./assets/projects/project-1.png";

export default function ProjectList() {
  const projects = [
    {
      id: crypto.randomUUID(),
      img: projectImg1,
      href: "https://sunshinemedicaltourism.com/",
      title: "SUNSHINE MEDICAL TOURISM",
      description:
        "This website was made with a combination of plain HTML, CSS, and JavaScript, while also incorporating a subtle yet impactful touch of PHP for directory manipulation",
    },
    {
      id: crypto.randomUUID(),
      img: projectImg1,
      href: "#",
      title: "TITLE",
      description: "Description",
    },
    {
      id: crypto.randomUUID(),
      img: projectImg1,
      href: "#",
      title: "TITLE",
      description: "Description",
    },
  ];
  return (
    <div id="projects" className="projects-container">
      {projects.map((project) => {
        return (
          <ProjectItem
            key={project.id}
            img={project.img}
            href={project.href}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </div>
  );
}
