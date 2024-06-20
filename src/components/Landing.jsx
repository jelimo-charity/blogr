// import React from 'react'
import logo from '../assets/images/logo.svg';
import './landing.scss'
const Landing = () => {
  return (
    <>
      <section className="landing">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="blogr-logo" />
          </div>
          <div className="links">
            <div className="leftLinks">
              <ul>
                <li>
                  <select className="dropdown" >
                    <option value="#">Products</option>
                   
                  </select>
                </li>
                <li>
                  <select className="dropdown" >
                    <option value="#">Company</option>
                  </select>
                </li>
                <li>
                  <select className="dropdown" >
                    <option value="#">Connect</option>
                    <option value="#">Contact</option>
                    <option value="#">Newsletter</option>
                    <option value="#">LinkedIn</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="rightLinks">
              <ul>
                <li><a href="#">Login</a></li>
                <li className='signup'><a href="#">Signup</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blogrDescription">
            <h1 className="slogan-1">A modern publishing platform</h1>
            <p className="slogan-2">Grow your audience and build your online brand</p>
            <div className="buttons">
                <button className="startFree">Start For Free</button>
                <button className="learnMore">Learn More</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Landing;
