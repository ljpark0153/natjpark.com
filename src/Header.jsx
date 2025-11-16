import { Link } from "react-router-dom";
import Pdf from "./components/resume/Current_Resume.pdf";

function Header() {
  return (
    <header>
      <nav className="flex px-8 py-7 mx-auto justify-between text-xl">
        <div id="left-side">
          <Link className="mr-5" to="/">
            Home
          </Link>
        </div>
        <div id="right-side" className="flex">
          <Link className="mr-5" to="/projects">
            Projects
          </Link>
          <div>
            <a href={Pdf} target="_blank">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
