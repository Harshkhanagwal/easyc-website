import React, { useState } from 'react'
import './Header.css'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className='main'>
        <div className="innerHeader container">
          <Logo />

          <button onClick={() => setNav(!nav)} className='hamBt'>
            <RiMenu3Fill />
          </button>

          <nav className={nav ? 'show headernav' : 'headernav'}>
            <button onClick={() => setNav(!nav)} className='hamBt navbt'>
              <IoCloseSharp />
            </button>
            <span onClick={() => setNav(!nav)} className='nav-elm'><Link to={'/'}>Home</Link></span>
            <span onClick={() => setNav(!nav)} className='nav-elm'><Link to={'/guide'}>Guide</Link></span>
            <span onClick={() => setNav(!nav)} className='nav-elm'><Link to={'/download'}>Download</Link></span>
            <span onClick={() => setNav(!nav)} className='nav-elm'><Link to={'/about'}>About us</Link></span>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header