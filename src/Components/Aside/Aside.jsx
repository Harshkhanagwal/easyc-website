import React, { useContext, useEffect } from 'react'
import './Aside.css'
import Logo from '../Logo.jsx'
import { NavLink } from 'react-router-dom'
import { Globalcontext } from '../../Context/Context.jsx'
import { IoCloseSharp } from "react-icons/io5";

const Aside = (props) => {

    const { SetAsideMenu, asideMenu } = useContext(Globalcontext);

   

    return (
        <>
            <aside className={asideMenu ? `showm ${props.state}` : `hidem`}>
                <div className="aside-content">
                    <div className="aside-logo-area">
                        <Logo />
                        <button onClick={() => SetAsideMenu(!asideMenu)} className='aside-closebtn'>
                            <IoCloseSharp />
                        </button>
                    </div>
                    <hr />

                    <nav>
                        <ul>
                            <li onClick={() => SetAsideMenu(!asideMenu)}><NavLink to={'/guide/overview'}>Overview</NavLink></li>
                            <li onClick={() => SetAsideMenu(!asideMenu)}><NavLink to={'/guide/download'}>Download</NavLink></li>
                            <li onClick={() => SetAsideMenu(!asideMenu)}><NavLink to={'/guide/installation'}>Installation</NavLink></li>
                            <li onClick={() => SetAsideMenu(!asideMenu)}><NavLink to={'/guide/array'}>Array</NavLink></li>
                            <li onClick={() => SetAsideMenu(!asideMenu)}><NavLink to={'/guide/linkedlist'}>Linked List</NavLink></li>
                            <li onClick={() => SetAsideMenu(!asideMenu)}><NavLink to={'/guide/stack'}>Stack</NavLink></li>
                            <li onClick={() => SetAsideMenu(!asideMenu)}><NavLink to={'/guide/queue'}>Queue</NavLink></li>
                        </ul>
                    </nav>
                    <hr />
                </div>
            </aside>
        </>
    )
}

export default Aside