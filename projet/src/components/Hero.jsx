import "../styles/Hero.css";
// import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h4>Say hello to bella</h4>
        <span className="subtitle">Elegance at Your Fingertips</span>
        <h1>
          Elegance is just a click away with our stunning rings, necklaces, and bracelets. Shine bright with our exclusive collection. Your beauty deserves the perfect pieces, and we're here to help you shine. <br /> 
        </h1>
        <button className="btn">Shop Now</button>
      </div>

      <img className="hero-img" src="/images/rings.jpg" alt="showcase" />
    </section>
  );
}

export default Hero;


