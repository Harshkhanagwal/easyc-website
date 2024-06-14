import React from 'react'
import './herosection.css'
import Heroimg from '../../assets/heroImage.png'
import { Link } from 'react-router-dom'

const Herosection = () => {
    return (
        <>
            <div className="container herosection">
                <div className="hero-content">
                    <p className="heroText">
                        let your efforts to be Easy <span className='lighter'>with</span> <span className='colored'> EasyC</span>
                    </p>
                    <p className='heroSubHead'><b><span className="colored">EasyC</span></b> - A custom C library for for C programmers</p>
                    <div className="heroButtons">
                        <Link to={'/guide/overview'}>
                            <button>Getting Started</button>
                        </Link>
                        <Link to={'/guide/download'}>
                            <button className='downloadBT'>Download</button>
                        </Link>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={Heroimg} alt="Hero Image" />
                </div>
            </div>
        </>
    )
}

export default Herosection