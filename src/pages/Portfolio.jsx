import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
        <div class="container">
            <h2 class="section-title">My <span>Work</span></h2>
            <div class="portfolio-filter">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="web">Web</button>
                <button class="filter-btn" data-filter="app">App</button>
                <button class="filter-btn" data-filter="design">Design</button>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item" data-category="web">
                    <img src="./assets/images/Mediskills-Landing.png" alt="Project 1" class="portfolio-img"/>
                    <div class="portfolio-overlay">
                        <h3>Skill Program Info & Enrollment Platform</h3>
                        <p>A full-featured website for a Skill Development Organization</p>
                        <a href="https://mediskills.in/#/" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="portfolio-item" data-category="web">
                    <img src="./assets/images/Storify-landing.png" alt="Project 2" class="portfolio-img"/>
                    <div class="portfolio-overlay">
                        <h3>Ecommerce Website</h3>
                        <p>E-commerce website with product browsing, product filter, cart and checkout (more features to
                            come)</p>
                        <a href="https://storify-c275.onrender.com/" target="_blank"><i
                                class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="portfolio-item" data-category="design">
                    <img src="./assets/images/nextjs-dashboard.png" alt="Project 3" class="portfolio-img"/>
                    <div class="portfolio-overlay">
                        <h3>Analytics Dashboard</h3>
                        <p>Comprehensive analytics dashboard for financial performance tracking</p>
                        <a href="https://next-realtime-dashboard-frontend.vercel.app/"><i
                                class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="portfolio-item" data-category="web">
                    <img src="./assets/images/Sarthak-landing.png" alt="Project 4" class="portfolio-img"/>
                    <div class="portfolio-overlay">
                        <h3>CRM Platform</h3>
                        <p>CRM website for an Electrical & Automation supplier company with role-based permissions</p>
                        <a href="https://sarthakcomponents.com/crm/#/" target="_blank"><i
                                class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="portfolio-item" data-category="web">
                    <img src="./assets/images/Connectcircle-landing.png" alt="Project 5" class="portfolio-img"/>
                    <div class="portfolio-overlay">
                        <h3>Social Media Website</h3>
                        <p>Social media/Image sharing website for club goers</p>
                        <a href="javascript:void(0);" onClick="openVideo()"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="portfolio-item" data-category="design">
                    <img src="./assets/images/yoga-landing-page.png" alt="Project 6" class="portfolio-img"/>

                    <div class="portfolio-overlay">
                        <h3>Yoga Landing Page</h3>
                        <p>Modern & clean Landing page design for a Yoga studio</p>
                        <a href="./assets/images/yoga-landing-page.png"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="portfolio-item" data-category="web">
                    <img src="./assets/images/ecommify-landing.png" alt="Project 5" class="portfolio-img"/>
                    <div class="portfolio-overlay">
                        <h3>Social Media Website</h3>
                        <p>Social media/Image sharing website for club goers</p>
                        <a href="https://nextjs-ecom-murex.vercel.app/" target="_blank"><i
                                class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio