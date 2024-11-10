import styles from '../styles/Hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.heroSection} bg-cover bg-center`}
      style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
    >
      <div className={styles.overlay}>
        <div className={`${styles.container} container mx-auto`}>
          {/* Heading */}
          <h1 className={`${styles.heading} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-sans`}>
            <span>
              Hello, <br /> My Name is{' '}
              <span className="highlight">Muhammad <br />Khurram </span> Malik
            </span>
          </h1>

          {/* Button */}
          <a
            href="#projects"
            className={styles.ctaButton}
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
