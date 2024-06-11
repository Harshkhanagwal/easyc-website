import React, { useContext, useEffect, useState } from 'react'
import './menubar.css'
import { IoIosArrowForward } from "react-icons/io";
import { Globalcontext } from '../Context/Context';



const Menubar = () => {

    const { SetAsideMenu, asideMenu } = useContext(Globalcontext);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        SetAsideMenu(false)
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 70) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [SetAsideMenu])




    return (
        <>
            <div className={isSticky ? 'menubar-area sticky' : 'menubar-area'}>
                <button onClick={() => SetAsideMenu(!asideMenu)}>Guide Menu <IoIosArrowForward /></button>
            </div>
        </>
    )
}

export default Menubar