import React from 'react'
import Footer from '../Components/Footer/Footer'
import Aboutsec from '../Components/AboutSec/Aboutsec'
import Team from '../Components/AboutSec/Team'

const About = () => {
  return (
    <>
    <div className="aboutpage container">
        <Aboutsec />
    </div>

    <Team/>

    <Footer/>
    </>
  )
}

export default About
