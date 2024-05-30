import React from 'react'
import './MyProject.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import projects from '../../assets/projects'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProject = () => {
  return (
    <div className='myproject' id='projects'>
        <div className="myproject-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="myproject-container">
          {projects.map((work,index)=>{
            return <img key={index} src={work.img} alt=''/>
          })}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyProject
