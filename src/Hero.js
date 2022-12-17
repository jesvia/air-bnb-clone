import coolshit from "./photo-grid.png"
function Hero() {
    return (
      <>
        <img src={coolshit} alt="hero" className='cool' />
        <div className="hero-content">
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        
      </>
    );
  }
export default Hero;