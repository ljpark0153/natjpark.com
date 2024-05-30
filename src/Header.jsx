import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex max-w-7xl px-8 py-7 mx-auto justify-between">
        <div id="left-side">
          <Link className="mr-5 text-lg" to="/">
            Home
          </Link>
        </div>
        <div id="right-side">
          <Link className="mr-5 text-lg" to="/projects">
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
