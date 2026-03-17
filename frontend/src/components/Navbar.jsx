import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        odonto.bel_
      </Link>

      <nav className="nav-links">
        <Link to="/">Início</Link>
        <a href="/#sobre">Sobre</a>
        <Link to="/jornada">Jornada</Link>
        <a href="/#conteudos">Conteúdos</a>
      </nav>

      <a
        className="instagram-button"
        href="https://www.instagram.com/odonto.bel_/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </header>
  );
}

export default Navbar;