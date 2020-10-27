import React from "react";
import "./PostComment.css";

function PostComment({ comment }) {
  return (
    <>
      <div className="postcomment__wrapper">
        <div className="postcomment__img_wrap">
          <img
            src={comment.commentProfileImage}
            alt=""
            className="postcomment__img"
          />
        </div>
        <div className="postcomment__comment_wrap">
          <p className="postcomment__comment_wrap_p">{comment.commentText}</p>
        </div>
      </div>
      <div className="postcomment__like_comment_wrap">
        <button className="postcomment__main_like">Like</button> ·{" "}
        <button className="postcomment__main_comment">Comment</button> ·{" "}
        <span className="postcomment__main_timestamp">
          {comment.commentTimestamp &&
            timeDifference(
              new Date(),
              new Date(comment.commentTimestamp.seconds * 1000)
            )}
        </span>
      </div>
    </>
  );
}
function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = current - previous;
  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + "s";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + "m";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + "h";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + "d";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + "m";
  } else {
    return Math.round(elapsed / msPerYear) + "y";
  }
}
export default PostComment;
