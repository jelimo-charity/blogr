// import React from 'react'
import illuPhone from '../assets/images/illustration-phones.svg'
import illuCircles from '../assets/images/bg-pattern-circles.svg'
import './services.scss'
const Services = () => {
  return (
    <section className="services">
      <div className="servicesLeft">
        <img className='phone' src={illuPhone} alt="" />
        <img className='circle-pattern' src={illuCircles} alt="" />

      </div>
      <div className="servicesRight">
        <h3> State of the Art Infrastructure </h3>
        <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
      </p>
      </div>
    </section>
  )
}

export default Services
