import React from 'react'
import "../page.css";

import Codebx from '../../Components/Codebx/Codebx'
import Highlight from '../../Components/highlight/Highlight';
import Menubar from '../../menubar/Menubar';
import Aside from '../../Components/Aside/Aside';
import { Link } from 'react-router-dom';

const hello =`#include <stdio.h>
//must include easyc.h file
#include <easyC.h>
    
int main() {
    sayHii();
    return 0;
}`;
const hello2 =`#include <stdio.h>
//must include easyc.h file
#include "./easyc.h"
    
int main() {
    sayHii();
    return 0;
}`;

const Installation = () => {
    return (
        <>
            <Menubar />
            <Aside />
            <div className="container guide-container">
                <div className="content-area">
                    <h1>Installation</h1>
                    <p>Download the file first {`(`}<Link to="/guide/download">Download from here</Link>{`)`}.</p>
                    <hr />
                    <h2>Installation for local environment</h2>
                    <p>suitable for only those programs , which we don't have to share we only want to run on our system.</p>
                    <br />
                    <p><b>Note : You must have installed “MinGW” or any other c compiler in your system & bin folder should be added in environment variable !</b></p>
                    <br />
                    <h3>Steps:</h3>
                    <ol>
                    <li><p>Unzip the downloaded zip file. </p></li>
                    <li><p>Copy <Highlight value="easyc.h"  /> file.</p></li>
                    <li><p>Go to include fo lder  {`(`} which is added in environment variable {`)`} and paste it : {`(`} In most of the cases the path is : <Highlight value=" C:\MinGW\include"/> {`)`}.</p></li>
                    <li><p>Try Hello World program  with easyc.</p></li>
                    </ol>
                    <Codebx code={hello}/>
                    <hr />
                    <h2>Installation for particular projects</h2>
                    <p>Suitable for those programs, which you want to publish or upload somewhere.</p>
                    <br />
                    <p><b>Note : You must have installed “MinGW” or any other c compiler in your system & bin folder should be added in environment variable !</b></p>
                    <br />
                    <h3>Steps:</h3>
                    <ol>
                        <li>Unzip the downloaded zip file.</li>
                        <li><p>Copy <Highlight value="easyc.h"  /> file.</p></li>
                        <li>Past it in same folder in which where your program file/files are stored</li>
                        <li>To import easyc.h header file you can use <Highlight value={`./eascy.h`}></Highlight>, make sure that easyc header file is stored in same folder</li>
                        <li>Try Hello World program  with easyc.</li>
                    </ol>
                    <Codebx code={hello2}/>
                </div>
            </div>
        </>
    )
}

export default Installation