import gitHub from "./assets/icons/github.svg";
import instagram from "./assets/icons/instagram.svg";
import linkedin from "./assets/icons/linkedin.svg";
import twitter from "./assets/icons/x-twitter.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import resume from "./assets/icons/file-lines-solid.svg";
import brucewebster from "./assets/brucewebster.pdf";

export default function SocialMediaList() {
  const icons = [
    {
      id: crypto.randomUUID(),
      img: gitHub,
      href: "https://github.com/Bruce-Webster-21",
    },
    {
      id: crypto.randomUUID(),
      img: instagram,
      href: "https://www.instagram.com/bruce__webster/",
    },
    {
      id: crypto.randomUUID(),
      img: linkedin,
      href: "https://www.linkedin.com/in/bruce-webster-4b798b1b0",
    },
    {
      id: crypto.randomUUID(),
      img: twitter,
      href: "https://twitter.com/brucecalhounweb?s=21&t=-Z_qbYlSNW3zJeG-m-xpxA",
    },
    {
      id: crypto.randomUUID(),
      img: whatsapp,
      href: "https://wa.me/18296698409",
    },
    {
      id: crypto.randomUUID(),
      img: resume,
      href: brucewebster,
    },
  ];
  const email = [
    "brucewebster222@gmail.com",
    "mailto:brucewebster222@gmail.com",
  ];
  return (
    <>
      <div className="social-media-container">
        <div className="icon-container">
          {icons.map((icon) => {
            return (
              <a key={icon.id} href={icon.href} target="blank">
                <img className="icon" src={icon.img} />
              </a>
            );
          })}
        </div>
        <a className="email" href={email[1]}>
          {email[0]}
        </a>
      </div>
    </>
  );
}
