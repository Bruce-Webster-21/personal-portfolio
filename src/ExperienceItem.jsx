export default function ExperienceItem({ title, time, subTitle, description }) {
  return (
    <div className="experience-container">
      <h3>{title.toUpperCase()}</h3>
      <h4>{subTitle}</h4>
      <h4>{time}</h4>
      <p>{description}</p>
    </div>
  );
}
