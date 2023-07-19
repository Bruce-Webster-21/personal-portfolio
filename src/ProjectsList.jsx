import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";
import projectImg1 from "./assets/projects/project-1.png";

export default function ProjectList() {
  const projects = [
    {
      id: uuidv4(),
      img: projectImg1,
      href: "https://sunshinemedicaltourism.com/",
      title: "SUNSHINE MEDICAL TOURISM",
      description:
        "This website was made with a combination of plain HTML, CSS, and JavaScript, while also incorporating a subtle yet impactful touch of PHP for directory manipulation",
    },
    {
      id: uuidv4(),
      img: projectImg1,
      href: "#",
      title: "TITLE",
      description: "Description",
    },
    {
      id: uuidv4(),
      img: projectImg1,
      href: "#",
      title: "TITLE",
      description: "Description",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      {projects.map(({ id, img, href, title, description }) => (
        <ProjectItem
          key={id}
          img={img}
          href={href}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
