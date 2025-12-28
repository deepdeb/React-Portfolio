import React from 'react'
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { FaSquareUpwork, FaUpwork, FaX, FaXTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section id="contact">
      <div class="container">
        <h2 class="section-title">Get In <span>Touch</span></h2>
        <div class="contact-container">
          <div class="contact-info">
            <h3 className='font-bold'>Let's talk about your project</h3>
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <FaEnvelope/>
                </div>
                <div class="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:debnath.pradeep619@gmail.com">debnath.pradeep619@gmail.com</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <FaPhoneAlt/>
                </div>
                <div class="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+916290005151">+91 6290005151</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <FaMapMarkerAlt/>
                </div>
                <div class="contact-text">
                  <h4>Location</h4>
                  <p>Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
            <div class="social-links">
              <a href="https://github.com/deepdeb" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pradeepdebnath/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://x.com/pradeepdebnath_" target="_blank">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/pradeepdebnath_" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/pradeep.debnath.73" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://www.fiverr.com/debnath_pradeep" target="_blank">
                <FaSquareUpwork />
              </a>
            </div>
          </div>
          <div>
            <form id="contactForm" action="https://formspree.io/f/xjkrglgo" method="post">
              <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="Your Name" required />
              </div>
              <div class="form-group">
                <input type="email" name="email" class="form-control" placeholder="Your Email" required />
              </div>
              <div class="form-group">
                <input type="text" name="subject" class="form-control" placeholder="Subject" required />
              </div>
              <div class="form-group">
                <textarea name="message" class="form-control" placeholder="Your Message"
                  required></textarea>
              </div>
              <button type="submit" class="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact