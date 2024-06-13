import React from "react";
import Menubar from "../../menubar/Menubar";
import Aside from "../../Components/Aside/Aside";
import { BsDisplay } from "react-icons/bs";
import "../page.css";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <>
      <Menubar />
      <Aside />
      <div className="container guide-container">
        <div className="content-area">
          <h1>Download</h1>
          <div className="download-btn-area">
            <p>Click here to download :</p>
            <a href="https://github.com/Harshkhanagwal/easyc.h" target="_blank">
              <button className="download_btn">Download</button>
            </a>
          </div>
          <hr />
          <div className="steps_sec">
            <h2>Steps:</h2>
            <ol>
              <li>1. Click on download button {`(`} It will redirect you to github link of easy c llibrary{`)`} <img src="" alt="" />
              </li>
              <li>2. Click on code button</li>
              <li>3. Download it as a Zip file</li>
            </ol>
            <p>For further instruction of installation follow the <Link to={"/guide/installation"}>Installation Guide</Link></p><s></s>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
