import React from "react";

const Team = () => {
  return (
    <>
      <div className="abs-main">
        <div className="container our_team">
          <h2>Our Team</h2>
          <div className="team_profiles">
            <div className="profile">
              <div className="profile_info harsh">
                <span>Harsh Khanagwal</span>
                <p>Developer & Founder</p>
              </div>
            </div>
            <div className="profile">
              <div className="profile_info priyanshu">
                <span>Priyanshu</span>
                <p>Developer & Co-Founder</p>
              </div>
            </div>

            <div className="profile">
              <div className="profile_info lalita">
              <span>Lalita</span>
              <p>Developer & Co-Founder</p>
              </div>
            </div>
            <div className="profile">
              <div className="profile_info ayush">
              <span> Unknown</span>
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
