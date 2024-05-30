import React from 'react'
import './Hero.css'
import dp from '../../assets/dp.jpg'
import resume from '../../assets/resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={dp} alt="" />
        <h1>GEORGEKUTTY K JOHN </h1>
        <p>I'M A MERN STACK DEVELOPER FROM INDIA</p>
        <div className="hero-action">
          <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
          <div className="hero-resume">  <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a></div>

        </div>


      
    </div>
  )
}

export default Hero
