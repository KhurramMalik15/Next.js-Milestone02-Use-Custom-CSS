// components/About.js
import styles from '../styles/About.module.css';
const About = () => {
    return (
      <section id="About" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span>A</span>bout Us
        </h2>
        <div className={styles.flexContainer}>
          {/* Left Image */}
          <div className={styles.imageContainer}>
            <img
              src="/images/img-2.png"
              alt="About Us"
              className="w-full"
            />
          </div>

          {/* Right Text */}
          <div className={styles.textContainer}>
            <p>
              I'am a Front-End Web Developer & Cloud Enthusiast
            </p>
            <p>
              Greetings! I'm Muhammad Khurram Malik, a dedicated front-end web developer with a knack for building visually stunning and user-friendly websites. With 6 months of experience, I've honed my skills across multiple technologies.
              <br /><br />
              💻 Currently, I’m diving into the world of Cloud Applied Generative AI Engineering at GIAIC, where I'm exploring the intersection of AI and cloud technologies to create intelligent, scalable solutions.
              <br /><br />
              🚀 What drives me? The desire to create meaningful digital experiences, solve complex problems, and constantly evolve in the ever-changing tech landscape. I thrive on collaborating with teams and clients to bring ideas to life, while always staying open to learning and improving.
            </p>
            <p>
              Join us on our journey to make a positive impact in the world. Thank you for choosing us!
            </p>
          </div>
        </div>
      </div>
    </section>
    );
  }; 
  
  export default About;