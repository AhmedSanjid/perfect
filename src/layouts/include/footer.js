import React from 'react'

function Footer() {
    return (

<footer id="footer" className="footer dark-background">
    <div className="container">
      <h3 className="sitename">Perfect Coaching</h3>
      <p>JOIN US & JOIN WITH DIFFERENCE & BE PERFECT</p>
      <div className="social-links d-flex justify-content-center">
        <a href=""><i className="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com/PerfectCoaching"><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-skype"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="container">
        <div className="copyright">
          <span>Copyright</span> <strong className="px-1 sitename">Perfect Coaching</strong>
          <span>All Rights Reserved</span>
        </div>
        <div className="credits">Designed by <a href="https://portfolio-sanjid-ahmed.vercel.app/">Sanjid Ahmed Mukut</a>
        </div>
      </div>
    </div>
  </footer>
)
}

export default Footer