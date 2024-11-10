import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css'; // Import the CSS module

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track hamburger menu state

  // Handle the scroll event to change the header style
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true); // Change header style once scrolled 100px
    } else {
      setIsScrolled(false);
    }
  };

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className={styles.logo}>
            <a href="#home">
              <span className="text-red-600">M</span>KM
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className={`${styles.navLinks} ${isMenuOpen ? 'active' : ''} md:flex space-x-8`}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#contact" className={styles.navLink}>Contact Us</a>
          </nav>

          {/* Hamburger Menu (Mobile) */}
          <div
            className={`${styles.hamburgerMenu} md:hidden`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
