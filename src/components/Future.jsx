// import React from 'react'
import illDesktop from '../assets/images/illustration-editor-desktop.svg'
import illMobile from '../assets/images/illustration-editor-mobile.svg'
import './future.scss';
const Future = () => {
  return (
   <section className="futureSection">
     <h2>Designed for the future</h2>
     <div className="futureDescription">
        <div className="leftColumn">
        <h3>Introducing an extensible editor</h3>
        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
          change the looks of a blog
        </p>
        <h3>Robust content management</h3>
        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
        </div>
        <div className="rightColumn">
            <img src={illDesktop} alt="" className="illDesktop" />
            <img src={illMobile} alt="" className="illMobile" />

        </div>
     </div>
   </section>
  )
}

export default Future
