import React, { useEffect } from 'react'

import { useContext } from 'react';
import { Globalcontext } from '../Context/Context';

const Home = () => {


    const { aside, SetAside } = useContext(Globalcontext);
    useEffect(() => {
        SetAside('hide')
    }, [SetAside])



    return (

        <>
            <div>Home</div>

        </>
    )
}

export default Home