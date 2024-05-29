import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="max-w-6xl px-8 py-7 mx-auto">
        <Link className="mr-5 text-lg" to="/">
          Home
        </Link>
        <Link className="mr-5 text-lg" to="/projects">
          Projects
        </Link>
      </nav>
    </header>
  );
}

export default Header;
