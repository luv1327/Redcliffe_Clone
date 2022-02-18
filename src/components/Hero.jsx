import '../styles/Hero.css';
import HeroImage from '../assets/images/hero_image.png';

function Hero() {
  return (
    <section className='hero__section'>
      <div className='hero__left'>
        <img src={HeroImage} alt='Prescription' className='hero__heroImage' />
      </div>
      <div className='hero__right'>
        <div className='hero__rightTagline'>
          <h1 className='hero__taglineText'>
            Welcome
            <br />
            to the Future
            <br />
            of Medicine
          </h1>
          <p className='hero__taglineSubText'>
            Let your genes guide your path to a healthier life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
