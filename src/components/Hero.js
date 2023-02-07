import "./Hero.css"
import React from 'react'
import IntroImg from "../Assets/herobg.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="Hero">
        <div className="mask">
            <img className="intro-img"
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI! I AM BHOOMIKA H.M.</p>
            <h1> Software Developer.</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn-light">Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default Hero