import React, { useContext, useEffect } from 'react'
import Herosection from '../Components/Herosection/Herosection'
import Whyus from '../Components/Whyus/Whyus'
import Footer from '../Components/Footer/Footer'
import { Globalcontext } from '../Context/Context'

const Home = () => {

    const {SetLogo } = useContext(Globalcontext);

    useEffect(() => {
        SetLogo(true)
    }, SetLogo)


    return (

        <>
            <Herosection />
            <Whyus />

            <Footer />
        </>
    )
}

export default Home