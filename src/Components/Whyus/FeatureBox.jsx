import React from 'react'
import './Whyus.css'
const FeatureBox = (props) => {
    return (
        <>

            <div className="featurebx">
                <div className="ftr-content">
                    <span className="head">
                        {props.head}
                    </span>
                    <span className="dis">
                        {props.des}
                    </span>
                </div>
            </div>

        </>
    )
}

export default FeatureBox