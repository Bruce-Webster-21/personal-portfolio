export default function ExperienceItem({ title, subTitle, description }) {
  return (
    <>
      <div className="experience-container">
        <div className="flex">
          <h3>{title.toUpperCase()}</h3>
          <h4>{subTitle}</h4>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
}
