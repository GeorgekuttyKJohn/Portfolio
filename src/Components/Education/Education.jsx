import React from 'react'
import './Education.css'
import theme_pattern from "../../assets/theme_pattern.svg"


const Education = () => {
  return (
    <div className='education' id='education'>
      <div className="edu-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="edu-container">
      <div class="edu-container1" >
            <h1>MERN Stack Development</h1>
            
           <p> MERN Stack Development intern at irohub inftech</p>
           <p class="p1">September 2023 to January 2024</p>
           </div>

           <div className="edu-container1">
           <h1> Mechanical Engineering</h1>

<p>Mechanical Engineering graduate from SJCET Palai</p>
<p class="p1">August 2019 to June 2023</p>
           </div>

           <div className="edu-container1">

           <h1>Higher Secondary Education (12th)</h1>
            <p>St. John Nephumsian's Higher Secondary School Kozhuvanal</p>
            <p class="p1">June 2017 to March 2019</p>
           </div>
      </div>
    </div>
  )
}

export default Education
