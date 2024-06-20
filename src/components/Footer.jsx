// import React from 'react'
import logo from '../assets/images/logo.svg'
import './footer.scss'
const Footer = () => {
  return (
    <section className="footer">
    <div className="footerbox">
        <img src={logo} alt="" />
    </div>
    <div className="footerbox">
    <h6>Product</h6>
    <ul>
      <li><a href="#">Overview</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Marketplace</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Integrations</a></li>
    </ul>
    </div>
    <div className="footerbox">
    <h6>Company</h6>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Careers</a></li>
    </ul>
    </div>
    <div className="footerbox">
    <h6>Connect</h6>
    <ul>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Newsletter</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
    </div>
    </section>
  )
}

export default Footer
