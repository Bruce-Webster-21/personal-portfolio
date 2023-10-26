import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";
import projectImg1 from "./assets/projects/project-1.png";
import projectImg2 from "./assets/projects/project-2.png";
import projectImg3 from "./assets/projects/project-3.png";
import projectImg4 from "./assets/projects/project-4.png";

export default function ProjectList() {
  const projects = [
    {
      id: uuidv4(),
      img: projectImg4,
      href: "#",
      githubHref: "https://github.com/Bruce-Webster-21/victor-estrella",
      title: "DR. VICTOR ESTRELLA",
      description:
        "This website was made with a combination of plain HTML, CSS, and JavaScript, while also incorporating a subtle yet impactful touch of PHP for directory manipulation",
    },
    {
      id: uuidv4(),
      img: projectImg3,
      href: "#",
      githubHref: "https://github.com/Bruce-Webster-21/depiladita",
      title: "DEPILADITA ESTHETIC",
      description:
        "This website was made with a combination of plain HTML, CSS, and JavaScript, while also incorporating a subtle yet impactful touch of PHP for directory manipulation",
    },
    {
      id: uuidv4(),
      img: projectImg1,
      href: "https://sunshinemedicaltourism.com/",
      githubHref:
        "https://github.com/Bruce-Webster-21/Sunshine-Medical-Tourism-Website",
      title: "SUNSHINE MEDICAL TOURISM",
      description:
        "This website was made with a combination of plain HTML, CSS, and JavaScript, while also incorporating a subtle yet impactful touch of PHP for directory manipulation",
    },
    {
      id: uuidv4(),
      img: projectImg2,
      href: "https://sapienzaacademy.com/",
      githubHref: "https://github.com/Bruce-Webster-21/sapienzaacademy",
      title: "SAPIENZA ACADEMY",
      description:
        "This dark-themed website for a language academy located in the Dominican Republic was made with a combination of plain HTML, CSS, and JavaScript",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      {projects.map(({ id, img, href, githubHref, title, description }) => (
        <ProjectItem
          key={id}
          img={img}
          href={href}
          githubHref={githubHref}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
