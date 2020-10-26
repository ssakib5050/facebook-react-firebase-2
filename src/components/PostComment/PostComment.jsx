import React from "react";
import "./PostComment.css";

function PostComment() {
  return (
    <>
      <div className="postcomment__wrapper">
        <div className="postcomment__img_wrap">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="postcomment__img"
          />
        </div>
        <div className="postcomment__comment_wrap">
          <p className="postcomment__comment_wrap_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            molestias.
          </p>
        </div>
      </div>
      <div className="postcomment__like_comment_wrap">
        <button className="postcomment__main_like">Like</button> ·{" "}
        <button className="postcomment__main_comment">Comment</button> ·{" "}
        <span className="postcomment__main_timestamp">25m</span>
      </div>
    </>
  );
}

export default PostComment;
