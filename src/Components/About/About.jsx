import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import about_dp from "../../assets/about_dp.jpg"

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
            </div> 
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_dp} alt="" />
                    
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p className='para'>I'm a versatile mechanical engineer with a B.Tech degree, currently focusing on MERN stack web development. I have experience in React, Node.js, HTML, CSS, and JavaScript. I'm dedicated to continuous learning and adapting to new technologies. Besides coding, I enjoy video editing and design, which I incorporate into my projects. My work reflects a blend of technical precision and creative expression, making me well-equipped to handle diverse challenges. Visit my website to see how I merge engineering and web development with a creative touch.</p>


                    </div>
                    <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React.js</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}}/></div>



                    </div>
                  
                    
                </div>
            </div>
      
    </div>
  )
}

export default About
