import Logo from "/src/assets/WT-logo-green.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img className="logo" src={Logo} alt="Will Torman Logo" />
        </a>
      </div>
      {/* Header Nav Menu */}
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Github">Github</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
