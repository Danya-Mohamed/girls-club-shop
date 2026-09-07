import Navbar from "../components/Navbar";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <Navbar />

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you.  
            Whether it’s a question, feedback, or support — we’re here for you.
          </p>

          <div className="contact-details">
            <div>
              <h4>Email</h4>
              <p>support@girlsclub.com</p>
            </div>

            <div>
              <h4>Phone</h4>
              <p>+20 100 000 0000</p>
            </div>

            <div>
              <h4>Working Hours</h4>
              <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>

        </div>

      </div>

    </div>
  );
}