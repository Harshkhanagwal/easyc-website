import React, { useContext, useEffect } from 'react'
import './menubar.css'
import { IoIosArrowForward } from "react-icons/io";
import { Globalcontext } from '../Context/Context';



const Menubar = () => {

    const { SetAsideMenu, asideMenu } = useContext(Globalcontext);
    useEffect(() => {
        SetAsideMenu(false)
    }, [SetAsideMenu])

    return (
        <>
            <div className="menubar-area">
                <button onClick={() => SetAsideMenu(!asideMenu)}>Guide Menu <IoIosArrowForward /></button>
            </div>
        </>
    )
}

export default Menubar