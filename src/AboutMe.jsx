export default function AboutMe() {
  const aboutMe = [
    "Hello, I'm Bruce Webster, a Teacher and Front-end Developer fluent in Spanish, Italian, and English. With a diverse background in education and programming, I bring a unique blend of skills to my work. I embarked on my teaching journey in 2019, where I discovered my innate ability to connect with students and foster their learning. However, it was in 2020 that I stumbled upon the world of programming and instantly found my passion ignited.",
    "Starting with Python, I delved into the intricacies of web development and quickly found myself captivated by its limitless possibilities. As I immersed myself in HTML, CSS, and JavaScript, including its frameworks.",
    "I am passionate about bringing ideas to life through clean code, user-centric design, and efficient problem-solving. If you're looking to enhance your online presence, I am eager to collaborate with you. Whether you need a modern website, an engaging e-commerce platform, or a customized web application, let's work together to turn your vision into a reality. Please don't hesitate to reach out to me. Together, we can create something truly remarkable!",
  ];

  return (
    <div id="about" className="about">
      {aboutMe.map((paragraph, index) => (
        <>
          <p key={index}>{paragraph}</p>
          <br />
        </>
      ))}
    </div>
  );
}
