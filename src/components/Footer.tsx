// components/Footer.tsx

import styles from '../styles/Footer.module.css'; // Import custom CSS module

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-gray-900 font-sans text-white py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Header */}
        <div className="text-center mb-12">
          <h2 className={`${styles.footerTitle} text-4xl font-sans font-bold text-red-900`}>Get In Touch</h2>
          <p className="text-lg mt-4">Let’s work together! Contact us today for a free consultation.</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <h3 className={`${styles.footerSubtitle} font-semibold mb-4 text-xl text-red-900`}>Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-red-800 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-800 transition-colors">About us</a></li>
              <li><a href="#portfolio" className="hover:text-red-800 transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-red-800 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-red-800 transition-colors">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`${styles.footerSubtitle} font-semibold mb-4 text-xl text-red-900`}>Contact</h3>
            <ul>
              <li><a href="mailto:info@example.com" className="hover:text-red-800 transition-colors">Email Us</a></li>
              <li><a href="tel:+1234567890" className="hover:text-red-800 transition-colors">Call Us</a></li>
              <li><a href="#" className="hover:text-red-800 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`${styles.footerSubtitle} font-semibold mb-4 text-xl text-red-900`}>Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {['facebook-new', 'instagram-new', 'github', 'linkedin'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg">
                  <img
                    src={`https://img.icons8.com/bubbles/100/000000/${icon}.png`}
                    alt={icon}
                    className="filter grayscale hover:filter-none transition-all duration-300"/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${styles.footerSubtitle} font-semibold mb-4 text-xl text-red-900`}>Address</h3>
            <p>1234 Web Street, Tech City Karachi,</p>
            <p className="mt-2">Pakistan</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12">
          <p>&copy; 2024 Muhammad Khurram Malik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

