import "./firstsection.scss";
import chevronright from "../../assets/chevron-right-solid.svg";
function FirstSection() {
  return (
    <>
      <section className="first-section" />
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
          <input
            type="email"
            placeholder="Email"
            className="first-section-form-input"
          />
          <div className="form-submit">
            <button type="submit">
              Commencer
              <img src={chevronright} alt="chevron-right" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default FirstSection;
