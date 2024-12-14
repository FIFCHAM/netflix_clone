import "./header.scss";
import neflixlogo from "../../assets/netflixheader.png";
import languageicone from "../../assets/languageicone.png";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img src={neflixlogo} alt="neflixlogo" />
        <div className="language-login-container">
          <div className="language-container">
            <img src={languageicone} alt="languageicone" />

            <select name="language" id="language">
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
          <button className="login-button">S&apos;identifier</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
