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
  const [theme, setTheme] = useState(false);
  const ThemeFunction = () => {
    setTheme(!theme);
  };

  return (
    <>
      <div
        className={
          theme ? "portfolio-container-dark" : "portfolio-container-light"
        }
      >
        <div className="main-container">
          <div className="first-container">
            <Header ThemeFunction={ThemeFunction} />
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
    </>
  );
}
