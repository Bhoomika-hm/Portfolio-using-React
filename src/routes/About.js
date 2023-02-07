import React from 'react'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="ABOUT." text="I am a Front-End Developer." />
      <Footer/>
    </div>
  )
}

export default About
