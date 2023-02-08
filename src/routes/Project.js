import React from 'react'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Footer from '../components/Footer'
import Work from "../components/Work"


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="PROJECTS." text="Some of my recent works"/>
      <Work/>
      <Footer/>
    
    </div>
  )
}

export default Project