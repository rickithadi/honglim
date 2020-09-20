import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <h4>© Copyright {new Date().getFullYear()} All rights reserved.</h4>
        <span>
          <a href="https://rickithadi.com">
            <span style={{ padding: '5px' }}>Made with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
            </svg>
            <span style={{ padding: '5px' }}>Hadi Rickit</span>
          </a>
        </span>
      </div>
    </footer>
  </div>
)
