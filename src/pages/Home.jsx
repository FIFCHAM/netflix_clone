import "./home.scss";
import Header from "../components/header/Header";
import FirstSection from "../components/first-section/Firstsection";
import Curve from "../components/Curve-separation/Curve";
function Home() {
  return (
    
    <section className="first-section" >
      <Header />
      <FirstSection />
      <Curve />

    </section>
  
  );
}

export default Home;
