import React from 'react'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Footer from '../components/Footer'
import Form from"../components/Form"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="CONTACT." text= "Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
