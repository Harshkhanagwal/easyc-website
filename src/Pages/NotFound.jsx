import React, { useEffect } from 'react'
import Error from '../assets/Error.png'

import { useContext } from 'react';
import { Globalcontext } from '../Context/Context';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';


const NotFound = () => {

    const { aside, SetAside } = useContext(Globalcontext);
    useEffect(() => {
        SetAside('hide')
    }, [SetAside])



    return (
        <>
            <div className="errorpage">
                <img src={Error} alt="Not found" className='error' />
                <h4>Page not found</h4>
                <Link to={'/'}>
                    <button>Back to Home</button>
                </Link>
            </div>


            <Footer />
        </>
    )
}

export default NotFound