import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./NavBar";
import SocialMediaList from "./SocialMediaList";
import AboutMe from "./AboutMe";
import ProjectsList from "./ProjectsList";
import ExperienceList from "./ExperienceList";
import MouseBlob from "./MouseBlob";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const containerClass = darkTheme
    ? "portfolio-container-dark"
    : "portfolio-container-light";

  return (
    <div className={containerClass}>
      <div className="main-container">
        <div className="first-container">
          <Header ThemeFunction={toggleTheme} />
          <Navbar />
          <SocialMediaList />
        </div>
        <div className="second-container">
          <AboutMe />
          <ProjectsList />
          <ExperienceList />
        </div>
      </div>
      <MouseBlob />
    </div>
  );
}
