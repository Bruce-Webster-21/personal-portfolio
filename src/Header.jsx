import Sun from "./assets/icons/sun.svg";
import Moon from "./assets/icons/moon.svg";

export default function Header({ ThemeFunction }) {
  const userData = {
    firstname: "bruce",
    lastname: "webster",
    jobtitle: ["front-end", "developer"],
  };
  return (
    <div className="header">
      <h1>
        <span className="first">{userData.firstname.toUpperCase()}</span>{" "}
        <span className="last">{userData.lastname.toUpperCase()}</span>
      </h1>
      <h2 className="job">
        <span className="job-title first">
          {userData.jobtitle[0].toUpperCase()}
        </span>{" "}
        <span className="job-title last">
          {userData.jobtitle[1].toUpperCase()}
        </span>
        <div className="theme-toggle">
          <img className="sun" src={Sun} />
          <label className="switch">
            <input onClick={ThemeFunction} type="checkbox" />
            <span className="slider"></span>
          </label>
          <img className="moon" src={Moon} />
        </div>
      </h2>
    </div>
  );
}
