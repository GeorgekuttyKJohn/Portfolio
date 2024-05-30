import React from 'react'
import './Footer.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        
        <p>Designed by Georgekutty K John</p>
        <div className="footer-icons">
        <a href="georgekuttykochumuriyil@gmail.com"><MdEmail className='fa'/></a>
        <a href="https://www.linkedin.com/in/georgekutty-k-john/"><FaLinkedin className='fa' /></a>
        <a href="https://github.com/GeorgekuttyKJohn"><FaGithub className='fa' /></a>

        </div>
      
    </div>
  )
}

export default Footer
