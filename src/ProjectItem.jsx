import github from "./assets/icons/github.svg";
import link from "./assets/icons/link-solid.svg";

export default function ProjectItem({
  title,
  description,
  img,
  href,
  githubHref,
}) {
  return (
    <>
      <div className="project-container">
        <img className="project-img" src={img} alt="" />
        <div className="project-info">
          <div className="project-title">
            <h3>{title}</h3>
            <div className="project-title-icons">
              <a href={githubHref} target="_blank">
                <img className="project-icon" src={github} alt="github icon" />
              </a>
              <a href={href} target="_blank">
                <img className="project-icon" src={link} alt="link icon" />
              </a>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
