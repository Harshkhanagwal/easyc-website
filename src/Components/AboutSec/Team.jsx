import React from "react";

const Team = () => {
  return (
    <>
      <div className="abs-main">
        <div className="container our_team">
          <h2>Our Team</h2>
          <div className="team_profiles">
            <div className="profile harsh">
              <div className="profile_info ">
                <span>Harsh Khanagwal</span>
                <p>Developer & Founder</p>
              </div>
            </div>

            <div className="profile priyanshu">
              <div className="profile_info">
                <span>Priyanshu</span>
                <p>Developer & Co-Founder</p>
              </div>
            </div>

            <div className="profile lalita">
              <div className="profile_info">
              <span>Lalita</span>
              <p>Developer & Co-Founder</p>
              </div>
            </div>
            <div className="profile ayush">
              <div className="profile_info">
              <span>Ayush</span>
              <p>Quality Assurance/Test engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
