import React from "react";
import "./LeftSidebar.css";

function LeftSidebar() {
  return (
    <div className="leftsidebar__wrap">
      <div className="leftsidebar__container">
        <LeftSidebarItem
          img="https://via.placeholder.com/150"
          title="Rajib Khan"
        />
        <LeftSidebarItem
          img="https://cdn4.iconfinder.com/data/icons/materia-flat-human-vol-1/24/013_048_collective_group_friends_people-256.png"
          title="Friends"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/166/166258.svg"
          title="Groups"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/2422/2422288.svg"
          title="Marketplace"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/3652/3652458.svg"
          title="Ad Centre"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/2780/2780179.svg"
          title="Crisis Reponse"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/2983/2983719.svg"
          title="Events"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/3649/3649763.svg"
          title="Facebook Pay"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/783/783409.svg"
          title="Friend Lists"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/1772/1772039.svg"
          title="Fundraisers"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/2946/2946177.svg"
          title="Games"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/528/528095.svg"
          title="Gaming video"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/3281/3281289.svg"
          title="Jobs"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/2178/2178011.svg"
          title="Live videos"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/2919/2919780.svg"
          title="Memories"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/1419/1419496.svg"
          title="Messenger"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/1646/1646791.svg"
          title="Messenger Kids"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/premium-icon/icons/svg/2574/2574050.svg"
          title="Most recent"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/2977/2977922.svg"
          title="Offers"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/888/888071.svg"
          title="Pages"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/3466/3466914.svg"
          title="Recent ad activity"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/907/907027.svg"
          title="Saved"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/svg/static/icons/svg/3074/3074767.svg"
          title="Videos"
        />

        <LeftSidebarItem
          img="https://www.flaticon.com/premium-icon/icons/svg/3406/3406981.svg"
          title="Weather"
        />
      </div>
    </div>
  );
}

function LeftSidebarItem({ img, title }) {
  return (
    <div className="leftsidebar__item">
      <div className="leftsidebar__item_img_wrap">
        <img src={img} alt="" className="leftsidebar__item_img" />
      </div>
      <span>{title}</span>
    </div>
  );
}

export default LeftSidebar;
