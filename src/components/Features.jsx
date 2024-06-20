// import React from 'react'
import laptopDesktop from '../assets/images/illustration-laptop-desktop.svg'
import laptopMobile from '../assets/images/illustration-laptop-mobile.svg'
import './features.scss'
const Features = () => {
  return (
    <section className="features">
    <div className="featuresLeft">
        <img src={laptopDesktop} alt="" className="laptopDesktop" />
        <img src={laptopMobile} alt="" className="laptopMobile" />

    </div>
    <div className="featuresRight">
        <h4>Free, open, simple</h4>
        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
      </p>
      <h5>Powerful tooling</h5>
      <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites.
      </p>
    </div>

   
   
  </section>
  )
}

export default Features
