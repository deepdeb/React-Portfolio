import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='mt-30'>
      <div class="container">
        <div class="footer-content">
          <p>&copy;
            <span> {year}</span>
            <span> Pradeep Debnath</span>
            . All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer