import React from "react";
import "./Navigation.css";

import {
  faSearch,
  FontAwesomeIcon,
  faPhotoVideo,
  faHome,
  faUsers,
  faObjectGroup,
  faPlus,
  faEnvelope,
  faBell,
  faCaretDown,
  faExclamationCircle,
  faCog,
  faQuestionCircle,
  faMoon,
  faSignOutAlt,
} from "../../Fontawesome";
import { useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { auth } from "../../firebase";

function Navigation({ user }) {
  let history = useHistory();
  return (
    <div className="navigation__wrap">
      <div className="navigation__first">
        <div className="navigation__brand_wrap">
          <div className="navigation__brand">F</div>
        </div>
        <div className="nagivation__search_wrap">
          <FontAwesomeIcon
            icon={faSearch}
            className="navigation__search_icon"
          />
          <input
            type="text"
            placeholder="Search Facebook"
            className="navigation__search_input"
          />
        </div>
      </div>
      <div className="navigation__second d-none d-xl-flex">
        <div className="navigation__icon_home  ">
          <FontAwesomeIcon
            icon={faHome}
            className="navigation__menu_icon active"
          />
        </div>
        <div className="navigation__icon_video ">
          <FontAwesomeIcon
            icon={faPhotoVideo}
            className="navigation__menu_icon"
          />
        </div>
        <div className="navigation__icon_group ">
          <FontAwesomeIcon icon={faUsers} className="navigation__menu_icon" />
        </div>

        <div className="navigation__icon_object ">
          <FontAwesomeIcon
            icon={faObjectGroup}
            className="navigation__menu_icon"
          />
        </div>
      </div>
      <div className="navigation__third">
        <div className="navigation__profile">
          <div className="navigation__profile_img_wrap">
            <img
              src={user ? user.photoURL : "https://via.placeholder.com/150"}
              alt=""
              className="navigation__profile_img"
            />
          </div>
          {user.displayName}
        </div>
        <div className="navigation__menu">
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div className="navigation__menu">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <div className="navigation__menu">
          <FontAwesomeIcon icon={faBell} />
        </div>

        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            className="navigaiton__dropdown_toggle"
            drop="left"
          >
            <div className="navigation__menu">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="navigaiton__dropdown">
            <div className="navigation__dropdown_item">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="navigation__dropdown_item_icon"
              />
              Give Feedback
            </div>
            <div className="navigation__dropdown_item">
              <FontAwesomeIcon
                icon={faCog}
                className="navigation__dropdown_item_icon"
              />
              Settings & Privacy
            </div>

            <div className="navigation__dropdown_item">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="navigation__dropdown_item_icon"
              />
              Help & Support
            </div>

            <div className="navigation__dropdown_item">
              <FontAwesomeIcon
                icon={faMoon}
                className="navigation__dropdown_item_icon"
              />
              Display preferences
            </div>

            <div
              className="navigation__dropdown_item"
              onClick={() => {
                auth.signOut();
                history.push("/");
              }}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="navigation__dropdown_item_icon"
              />
              Log Out
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navigation;
