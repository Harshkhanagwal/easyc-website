import React from "react";
import Menubar from "../../menubar/Menubar";
import Aside from "../../Components/Aside/Aside";
import "../page.css";
import { Link } from "react-router-dom";

import DownloadStep1 from "../../assets/downloadStep_1.png";
import DownloadStep2 from "../../assets/downloadStep_2.png";

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
              <li>1. Click on download button {`(`} It will redirect you to github link of easy c llibrary{`)`}</li>
              <li>2. Click on code button </li>
              <div className="img-container">
                <img src={DownloadStep1} alt="download step 1" />
              </div>
              <li>3. Download it as a Zip file
              </li>
              <div className="img-container">
                <img src={DownloadStep2} alt="download step 2" />
              </div>
            </ol>
            <p>For further instruction of installation follow the <Link to={"/guide/installation"}>Installation Guide</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
