export default function ProjectItem({ title, description, img, href }) {
  return (
    <>
      <a className="project-container" href={href} target="blank">
        <img className="project-img" src={img} alt="" />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </>
  );
}
