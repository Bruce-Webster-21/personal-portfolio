import { v4 as uuidv4 } from "uuid";

export default function NavBar() {
  const navLinks = [
    {
      id: uuidv4(),
      link: "about",
      href: "#about",
    },
    {
      id: uuidv4(),
      link: "projects",
      href: "#projects",
    },
    {
      id: uuidv4(),
      link: "experience",
      href: "#experience",
    },
  ];

  return (
    <nav className="nav-link-container">
      {navLinks.map((link) => (
        <a key={link.id} className="nav-link" href={link.href}>
          <div className="line"></div>
          {link.link.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
