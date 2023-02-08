import React from 'react'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Footer from '../components/Footer'
import AboutContent from "../components/AboutContent"
const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="ABOUT." text="I am a Front-End Developer." />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
