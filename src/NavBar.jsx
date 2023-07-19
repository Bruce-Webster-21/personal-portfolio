export default function NavBar() {
  const navLinks = [
    {
      id: crypto.randomUUID(),
      link: "about",
      href: "#about",
    },
    {
      id: crypto.randomUUID(),
      link: "projects",
      href: "#projects",
    },
    {
      id: crypto.randomUUID(),
      link: "experience",
      href: "#experience",
    },
  ];
  return (
    <nav className="nav-link-container">
      {navLinks.map((link) => {
        return (
          <>
            <a key={link.id} className="nav-link" href={link.href}>
              <div className="line"></div>
              {link.link.toUpperCase()}
            </a>
          </>
        );
      })}
    </nav>
  );
}
