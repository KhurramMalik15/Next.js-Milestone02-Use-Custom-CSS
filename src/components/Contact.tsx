// components/Contact.js
import '../styles/Contact.module.css';
export default function Contact() {
  return (
    <div id="contact" className="contact-section py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="contact-title mb-8">
          <span className="highlight">C</span>ontact Me
        </h2>
        <p className="contact-description mb-8">
          Feel free to reach out if you have any questions, collaborations, or
          project inquiries!
        </p>

        <form className="contact-form">
          {/* Name Input */}
          <div className="form-field mb-4">
            <label
              htmlFor="name"
              className="form-label text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-field mb-4">
            <label
              htmlFor="email"
              className="form-label text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div> 

          {/* Message Input */}
          <div className="form-field mb-4">
            <label
              htmlFor="message"
              className="form-label text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="form-submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

