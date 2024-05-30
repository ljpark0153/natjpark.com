import linkedinLogo from "./components/img/linkedin.svg";
import githubLogo from "./components/img/github.svg";
import emailLogo from "./components/img/envelope-solid.svg";

function Footer() {
  const handleClick = () => {
    const email = "mailto:ljpark0153@gmail.com";
    window.location.href = email;
  };

  return (
    <footer className="flex py-5 justify-center gap-10">
      <a href="https://github.com/ljpark0153">
        <img src={githubLogo} className="h-auto w-11"></img>
      </a>
      <a href="https://www.linkedin.com/in/park-jh/">
        <img src={linkedinLogo} className="h-auto w-11"></img>
      </a>
      <img
        src={emailLogo}
        onClick={handleClick}
        className="h-auto w-11 cursor-pointer"
      ></img>
    </footer>
  );
}

export default Footer;
