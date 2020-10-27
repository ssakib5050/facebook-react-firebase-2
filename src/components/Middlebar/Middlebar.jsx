import React, { useState, useEffect } from "react";
import "./Middlebar.css";

import Post from "../Post/Post";
import PostInput from "../PostInput/PostInput";

import { db } from "../../firebase";

function Middlebar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("postTimestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
  }, []);
  return (
    <div>
      <PostInput />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Middlebar;
