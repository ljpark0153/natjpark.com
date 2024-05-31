import { Link } from "react-router-dom";

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
          <div>Resume</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
