import "./firstsection.scss";
import chevronright from "../../assets/chevron-right-solid.svg";
function FirstSection() {
  return (
    <div className="first-section-content">
      <h1 className="first-section-title">
        Films et séries en illimité, et bien plus
      </h1>
      <h2 className="first-section-description">
        À partir de 5,99 €. Annulable à tout moment.
      </h2>
      <form action="" className="first-section-form">
        <h3>
          Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
          abonner ou réactiver votre abonnement.
        </h3>
        <div className="form-container">
          <div className="email-container">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            className="first-section-form-input"
          />

          </div>
          <div className="form-submit">
            <button type="submit">
              Commencer
              <img src={chevronright} alt="chevron-right" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default FirstSection;
