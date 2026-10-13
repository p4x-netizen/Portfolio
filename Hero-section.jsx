import React from 'react'
import './Hero-section.css'
import avatar_icon from '../assets/avatar.png'
import kip_icon from '../assets/kiplangat.png'

const Herosection = () => {
  return (
    <div className='mysection'>
       
        
      <div className="right">
         <div className="myself">
            <img src={avatar_icon} alt="" />
        </div>
        <h4>I am <span>Hussein Mkhalif..</span></h4>
        <br />
        <h1>I am a web-developer</h1>
        <br />
        <p>I’m a passionate Software Engineer who builds modern, scalable, <br /> and user-focused applications. I
        enjoy solving complex problems, <br /> learning new technologies, and turning ideas into reliable digital <br />
        solutions</p>
        <br />
        <div className="buttons">
        <button className='hire'>Hire me</button>
        <button className='download' id='btn'><a href={kip_icon} download='My curriculum Vitae'>Download CV<i class="fa-solid fa-download"></i></a></button>
        </div>
 
        <br />
        <div className="social-media">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-square-x-twitter"></i>
            <i class="fa-brands fa-tiktok"></i>
        
        </div>
      
      </div>
        
    </div>
  )
}

export default Herosection
