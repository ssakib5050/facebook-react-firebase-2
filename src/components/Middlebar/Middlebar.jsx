import React from "react";
import "./Middlebar.css";

import Post from "../Post/Post";
import PostInput from "../PostInput/PostInput";

function Middlebar() {
  return (
    <div>
      <PostInput />
      <Post />
    </div>
  );
}

export default Middlebar;
