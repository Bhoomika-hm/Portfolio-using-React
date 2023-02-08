import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
<h1>Who am I?</h1>
<p>
    I am a front-end developer and a  B-tech student from Lovely Proffesional University, Punjab.
    I have a serious  passion towards learning new technologies and applying the same .
 Myself  a Well-Organised and a multitasking person with efficient technical skills </p>
 <div className="list">
 <h2>Technical Skills</h2>
 <ul>
  <li>HTML</li> 
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Bootstrap</li>
  <li>React</li>
 </ul>
 </div>
 
<Link to="/Contact">
    <button className="btn">Contact</button>
</Link>
        </div>
      
    </div>
  )
}

export default AboutContent