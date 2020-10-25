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
        <div className="home__leftsidebar dev">
          <Scrollbars autoHide>
            <LeftSidebar />
          </Scrollbars>
        </div>
        <div className="home__middlebar dev">
          <Middlebar />
        </div>
        <div className="home__rightsidebar dev">
          <Scrollbars autoHide>
            <RightSidebar />
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default Home;
