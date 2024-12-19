import "./header.scss";
import neflixlogo from "../../assets/netflixheader.png";
import languageicone from "../../assets/languageicone.png";
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={neflixlogo} alt="neflixlogo" />
        <div className="language-login-container">
          <div className="language-container">

            <img src={languageicone} alt="languageicone" />
            <select className="language-select" name="language" id="language">
              <option className="language-fr" label="Français" value="fr">Français</option>
              <option className="language-en" label="English" value="en">English</option>
            </select>
          </div>
          <button className="login-button">S&apos;identifier</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
