import React, { useContext, useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Aboutsec from '../Components/AboutSec/Aboutsec'
import Team from '../Components/AboutSec/Team'
import { Globalcontext } from '../Context/Context'

const About = () => {

  const { SetLogo } = useContext(Globalcontext);

  useEffect(() => {
    SetLogo(true)
  }, SetLogo)


  return (
    <>
      <div className="aboutpage container">
        <Aboutsec />
      </div>

      <Team />

      <Footer />
    </>
  )
}

export default About
