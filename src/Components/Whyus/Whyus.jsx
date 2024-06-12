import React from 'react'
import './Whyus.css'
import FeatureBox from './FeatureBox'

const Whyus = () => {
    return (
        <>
            <div className="container whyus">
                <div className="head">
                    <h2>Why easyC</h2>
                    <div className="colorbar"></div>

                    <div className="features-area w100">
                        <FeatureBox head={"Reduce code length"} des="EasyC provide inbuild functions for many operations and tasks. So, you don't need to make your code more lengthier for those functions." />
                        <FeatureBox head={"Reduce human efforts"} des="With EasyC you can perform many operations directly from easyC.h's inbuild functions without putting efforts to make it from scratch." />
                        <FeatureBox head={"Improve production speed"} des="It saves times by reducing the code length and also helps to code faster with our pre build functions and operations." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyus