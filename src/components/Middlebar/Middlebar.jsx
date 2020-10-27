import React, { useState, useEffect } from "react";
import "./Middlebar.css";

import Post from "../Post/Post";
import PostInput from "../PostInput/PostInput";

import { auth, firebase, db, storage } from "../../firebase";

function Middlebar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
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
