import React from 'react'
import './Aboutsec.css'
import Aboutimage from '../../assets/aboutsec.png' 

const Aboutsec = () => {
  return (
    <>
      <div className="about_sec">
            <div className="about_content">
                <h2>
                    About US
                </h2>
                <p>easyC is a dynamic custom C programming language library designed to elevate the development process for C programmers of all levels. Our powerful header file simplifies intricate tasks, providing a seamless and intuitive coding experience. Whether you're just starting out or a seasoned coder, easyC accelerates project timelines, minimizes errors, and amplifies productivity. Bid farewell to complex syntax and embrace a smoother coding journey with easyC by your side.</p>
            </div>
            <img src={Aboutimage} alt="" />
        </div>
       
    </>
  )
}

export default Aboutsec
