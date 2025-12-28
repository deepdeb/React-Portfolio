import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'

const Services = () => {
  return (
    <section id="services">
      <div class="container">
        <h2 class="section-title">My <span>Services</span></h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <FaLaptopCode/>
            </div>
            <h3>Web Development</h3>
            <p>Custom website development with modern technologies like React, Vue, and Node.js. Responsive
              design that works perfectly on all devices.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <FaMobileAlt/>
            </div>
            <h3>Mobile Development</h3>
            <p>Cross-platform mobile app development using React Native. High-performance apps for
              iOS and Android from a single codebase.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <FaPaintBrush/>
            </div>
            <h3>UI/UX Design</h3>
            <p>Beautiful, intuitive interface design focused on user experience. Wireframing, prototyping, and
              user testing to create the perfect product.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services