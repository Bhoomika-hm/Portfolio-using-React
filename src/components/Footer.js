import "./Footer.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
  <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                
            <FaHome  size={20} style={{color:"white",marginRight:"2rem"}}/>
           <div>
           <p>Bengaluru.</p>
           <p>Karnataka</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone  size={20} style={{color:"white",marginRight:"2rem"}}/>
            7676801824
            </h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
            hmbhoomika2001@gmail.com
            </h4>
            </div>

        </div>

        <div className="right">
            <h4>About me</h4>
            <p> shdcvbfshjhefk rhgio uhfeion jnijnfidfjiso</p>
            <div className="social">
            <FaGithub size={30} style={{color:"white",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/>
            <FaInstagram  size={30} style={{color:"white",marginRight:"1rem"}}/>



            </div>
        </div>
    </div>
  </div>
        
    
  )
}

export default Footer