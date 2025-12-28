import { FaBriefcase, FaCode, FaMobileAlt, FaPaintBrush, FaServer } from 'react-icons/fa'



const About = () => {
  return (
    <section id="about">
      <div class="container">


        {/* about me heading  */}
        <h2 class="section-title">About <span>Me</span></h2>




        {/* about container  */}
        <div class="about-container">

          {/* about content  */}
          <div class="about-content">


            {/* profession & description */}
            <h3>Fullstack Developer</h3>
            <p>With over 2.5 years of experience in web development, I've worked on diverse projects from
              enterprise applications to innovative startups. My passion lies in creating efficient, scalable
              solutions that deliver exceptional user experiences.</p>




            {/* skills, experience and education tab  */}
            <div class="skills-tabs">
              <button class="tab-btn active" data-tab="skills">Skills</button>
              <button class="tab-btn" data-tab="experience">Experience</button>
              <button class="tab-btn" data-tab="education">Education</button>
            </div>





            {/* skills  */}
            <div class="tab-content active" id="skills">
              <div class="skills-list">
                <div class="skill-item">
                  <div class="skill-icon">
                    <FaCode />
                  </div>
                  <div class="skill-info">
                    <h4>Frontend Development</h4>
                    <p>React, Vue, JavaScript, TypeScript</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">
                    <FaServer />
                  </div>
                  <div class="skill-info">
                    <h4>Backend Development</h4>
                    <p>Node.js, Express, SQL</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">
                    <FaMobileAlt />
                  </div>
                  <div class="skill-info">
                    <h4>Mobile Development</h4>
                    <p>React Native</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">
                    <FaPaintBrush />
                  </div>
                  <div class="skill-info">
                    <h4>UI/UX Design</h4>
                    <p>Figma, HTML, CSS, Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>






            {/* experience  */}
            <div class="tab-content" id="experience">
              <div class="experience-list">
                <div class="experience-item">
                  <div class="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div class="experience-info">
                    <h4>Fullstack Developer</h4>
                    <p><span class="building-name">Tech India (Oct 2025 - Present)</span>
                    </p>
                    <p>Built modern web applications with React, Node.js, and SQL, utilizing
                      JavaScript, TypeScript, and Tailwind CSS to deliver end-to-end solutions.</p>
                  </div>
                </div>
                <div class="experience-item">
                  <div class="experience-icon">
                    <i class="fas fa-briefcase"></i>
                  </div>
                  <div class="experience-info">
                    <h4>Fullstack Developer</h4>
                    <p><span class="building-name">Microbase Infotech Pvt. Ltd. (Apr 2024 - Sept
                      2025)</span>
                    </p>
                    <p>Developed modern web apps using React, Node.js, and SQL, leveraging
                      JavaScript/TypeScript for end-to-end solutions.</p>
                  </div>
                </div>
                <div class="experience-item">
                  <div class="experience-icon">
                    <i class="fas fa-briefcase"></i>
                  </div>
                  <div class="experience-info">
                    <h4>Software Developer</h4>
                    <p><span class="building-name">SAP Labs (Feb 2017 - Dec 2017)</span></p>
                    <p>Built performant React applications with TypeScript, hooks, and REST APIs.</p>
                  </div>
                </div>
              </div>
            </div>





            {/* education  */}
            <div class="tab-content" id="education">
              <div class="education-list">
                <div class="education-item">
                  <div class="education-icon">
                    <i class="fas fa-graduation-cap"></i>
                  </div>
                  <div class="education-info">
                    <h4>B.Tech in Electrical Engineering</h4>
                    <p><span class="building-name">GNIT (2012 - 2016)</span></p>
                    <p>Graduated with CGPA 7.069</p>
                  </div>
                </div>
              </div>
            </div>


          </div>





          {/* about image  */}
          <div class="about-image">
            <img src="images/me.png" alt="Pradeep Debnath" />
          </div>





        </div>
      </div>
    </section>
  )
}

export default About