import React from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div className="rightsidebar__wrap">
      <h5 className="rightsidebar__wrap_text">Contacts</h5>
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 1"
        indicator={true}
      />

      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 2"
        indicator={true}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 3"
        indicator={true}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 4"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 5"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 6"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 7"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 8"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 9"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 10"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 11"
        indicator={true}
      />

      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 12"
        indicator={true}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 13"
        indicator={true}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 14"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 15"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 16"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 17"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 18"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 19"
        indicator={false}
      />
      <RightSidebarItem
        img="https://via.placeholder.com/150"
        name="Person 20"
        indicator={false}
      />
    </div>
  );
}

function RightSidebarItem({ img, name, indicator }) {
  return (
    <div className="rightsidebar__item_wrap">
      <div className="rightsidebar__img_wrap">
        <img src={img} alt="" className="rightsidebar__img" />
        {indicator && <div className="rightsidebar__indicator"></div>}
      </div>
      {name}
    </div>
  );
}

export default RightSidebar;
