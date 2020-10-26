import React from "react";
import "./Home.css";

import { Scrollbars } from "react-custom-scrollbars";

import Navigation from "../Navigation/Navigation";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import Middlebar from "../Middlebar/Middlebar";

function Home() {
  return (
    <div className="Home">
      <Navigation />

      <div className="home__mainContent">
        <div className="home__leftsidebar d-none d-xl-block ">
          <Scrollbars autoHide>
            <LeftSidebar />
          </Scrollbars>
        </div>
        <div className="home__middlebar ">
          <Middlebar />
        </div>
        <div className="home__rightsidebar d-none d-md-block ">
          <Scrollbars autoHide>
            <RightSidebar />
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default Home;
