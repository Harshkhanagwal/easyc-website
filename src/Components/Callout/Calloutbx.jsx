import React from 'react';
import './Calloutbx.css';
import { FiInfo } from "react-icons/fi";

const Calloutbx = (props) => {
    return (
        <div className="callout-area">
            <div className="calloutbx">
                <h3><FiInfo /> {props.heading}</h3>
                <ul>
                    {props.list.map((elm, index) => (
                        <li key={index}>{elm}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Calloutbx;
