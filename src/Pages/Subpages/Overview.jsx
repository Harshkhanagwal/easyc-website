import React, { useContext, useEffect, useState } from 'react'
import Calloutbx from '../../Components/Callout/Calloutbx'
import { Globalcontext } from '../../Context/Context';
import Menubar from '../../menubar/Menubar';
import Aside from '../../Components/Aside/Aside';

const Overview = () => {


    return (
        <>
            <Menubar />
            <Aside />
            <div className="container guide-container">

                <div className="content-area">

                    <h1>Overview of EasyC</h1>

                    <h2>Introduction</h2>
                    <p>
                        Welcome to the EasyC guide !<b>This guide will introduce you to EasyC and teach you how to use it the right way.</b> It is a user friendly platform which is used to simplify the operations performed in our program.<br /><br />

                        By the time you finish with this guide, you should be able to start building your own C language projects using EasyC.<br /><br />

                        We'll examine a basic C programming + EasyC to see how the pieces fit together.
                    </p>
                    <hr />


                    <Calloutbx heading={"Pre requisites"} list={["Ensure that You have to setup the latest version of  EasyC  on your system or with your project.", "You must have the intermediate knowledge of C programming.", "You must have the basic knowledge of data structure and their operations. "]} />
                    <hr />

                    <h2>What is EasyC</h2>
                    <p>
                        EasyC is a versatile custom C programming language library that enhances the development experience for C programmers. This powerful header file streamlines complex tasks, making them more accessible and intuitive. With EasyC, you can expedite your projects, reduce coding errors, and boost productivity. Whether you're a beginner or an experienced C programmer, EasyC empowers you to write efficient and clean code effortlessly. Say goodbye to convoluted syntax and hello to a smoother coding journey with EasyC.
                    </p>
                    <hr />


                    <h2>Why to use EasyC</h2>
                    <ul>
                        <li><b>Reduce code length</b> :  EasyC provide inbuild functions for many operations and tasks. So, you don’t need to make your code more lengthier for those functions.</li>
                        <li><b>Reduce human efforts</b>: With EasyC you can perform many operations directly from easyC.h's inbuild functions without putting efforts to make it from scratch.</li>
                        <li><b>Improve production speed</b>: It saves times by reducing the code length and also helps to code faster with our pre build functions and operations.</li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Overview