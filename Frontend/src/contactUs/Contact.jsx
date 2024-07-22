import React from 'react'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'


function Contact() {
  
  return (
    <>
    <Navbar/>
    <div className='min-h-screen '>
    <ContactUs/>
   </div>
    <Footer/>
    
    </>
  )
}

export default Contact