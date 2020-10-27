import React, { useState, useEffect } from "react";
import "./Post.css";

import {
  FontAwesomeIcon,
  faEllipsisH,
  faSave,
  faBell,
  faEyeSlash,
  faClock,
  faTimesCircle,
  faExclamationTriangle,
  faThumbsUp,
  faComment,
  faShareSquare,
} from "../../Fontawesome";
import { auth, firebase, db, storage } from "../../firebase";
import { Dropdown } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import PostComment from "../PostComment/PostComment";

function Post({ post }) {
  const [textarea, setTextarea] = useState("");
  const [postReacted, setPostReacted] = useState("");
  const [comments, setComments] = useState([]);
  const handleTextarea = (e) => {};

  useEffect(() => {
    const mainUsername = auth.currentUser.email;
    if (post.postReactions.like.find((like) => like === mainUsername)) {
      setPostReacted("like");
    } else if (post.postReactions.love.find((love) => love === mainUsername)) {
      setPostReacted("love");
    } else if (post.postReactions.care.find((care) => care === mainUsername)) {
      setPostReacted("care");
    } else if (post.postReactions.haha.find((haha) => haha === mainUsername)) {
      setPostReacted("haha");
    } else if (post.postReactions.wow.find((wow) => wow === mainUsername)) {
      setPostReacted("wow");
    } else if (post.postReactions.sad.find((sad) => sad === mainUsername)) {
      setPostReacted("sad");
    } else if (
      post.postReactions.angry.find((angry) => angry === mainUsername)
    ) {
      setPostReacted("angry");
    }
  }, []);

  const reactionInsert = (e) => {
    // console.log(e);
    const mainUsername = auth.currentUser.email;
    // console.log(mainUsername);
    const userReactedLike = post.postReactions.like.find(
      (like) => like === mainUsername
    );

    const userReactedLove = post.postReactions.love.find(
      (love) => love === mainUsername
    );

    const userReactedCare = post.postReactions.care.find(
      (care) => care === mainUsername
    );
    const userReactedHaha = post.postReactions.haha.find(
      (haha) => haha === mainUsername
    );
    const userReactedWow = post.postReactions.wow.find(
      (wow) => wow === mainUsername
    );
    const userReactedSad = post.postReactions.sad.find(
      (sad) => sad === mainUsername
    );
    const userReactedAngry = post.postReactions.angry.find(
      (angry) => angry === mainUsername
    );

    // console.log(userReactedLike);

    if (
      userReactedLike ||
      userReactedLove ||
      userReactedCare ||
      userReactedHaha ||
      userReactedWow ||
      userReactedSad ||
      userReactedAngry
    ) {
      // console.log("YEss");
      db.collection("posts")
        .doc(post.id)
        .update({
          postReactions: {
            like: post.postReactions.like.filter(
              (like) => like !== mainUsername
            ),
            love: post.postReactions.love.filter(
              (love) => love !== mainUsername
            ),
            care: post.postReactions.care.filter(
              (care) => care !== mainUsername
            ),
            haha: post.postReactions.haha.filter(
              (haha) => haha !== mainUsername
            ),
            wow: post.postReactions.wow.filter((wow) => wow !== mainUsername),
            sad: post.postReactions.sad.filter((sad) => sad !== mainUsername),
            angry: post.postReactions.angry.filter(
              (angry) => angry !== mainUsername
            ),
          },
        });
    } else {
      switch (e) {
        case "like":
          db.collection("posts")
            .doc(post.id)
            .update({
              postReactions: {
                like: [...post.postReactions.like, mainUsername],
                love: [...post.postReactions.love],
                care: [...post.postReactions.care],
                haha: [...post.postReactions.haha],
                wow: [...post.postReactions.wow],
                sad: [...post.postReactions.sad],
                angry: [...post.postReactions.angry],
              },
            });
          break;
        case "love":
          db.collection("posts")
            .doc(post.id)
            .update({
              postReactions: {
                like: [...post.postReactions.like],
                love: [...post.postReactions.love, mainUsername],
                care: [...post.postReactions.care],
                haha: [...post.postReactions.haha],
                wow: [...post.postReactions.wow],
                sad: [...post.postReactions.sad],
                angry: [...post.postReactions.angry],
              },
            });
          break;

        case "care":
          db.collection("posts")
            .doc(post.id)
            .update({
              postReactions: {
                like: [...post.postReactions.like],
                love: [...post.postReactions.love],
                care: [...post.postReactions.care, mainUsername],
                haha: [...post.postReactions.haha],
                wow: [...post.postReactions.wow],
                sad: [...post.postReactions.sad],
                angry: [...post.postReactions.angry],
              },
            });
          break;

        case "haha":
          db.collection("posts")
            .doc(post.id)
            .update({
              postReactions: {
                like: [...post.postReactions.like],
                love: [...post.postReactions.love],
                care: [...post.postReactions.care],
                haha: [...post.postReactions.haha, mainUsername],
                wow: [...post.postReactions.wow],
                sad: [...post.postReactions.sad],
                angry: [...post.postReactions.angry],
              },
            });
          break;

        case "wow":
          db.collection("posts")
            .doc(post.id)
            .update({
              postReactions: {
                like: [...post.postReactions.like],
                love: [...post.postReactions.love],
                care: [...post.postReactions.care],
                haha: [...post.postReactions.haha],
                wow: [...post.postReactions.wow, mainUsername],
                sad: [...post.postReactions.sad],
                angry: [...post.postReactions.angry],
              },
            });
          break;

        case "sad":
          db.collection("posts")
            .doc(post.id)
            .update({
              postReactions: {
                like: [...post.postReactions.like],
                love: [...post.postReactions.love],
                care: [...post.postReactions.care],
                haha: [...post.postReactions.haha],
                wow: [...post.postReactions.wow],
                sad: [...post.postReactions.sad, mainUsername],
                angry: [...post.postReactions.angry],
              },
            });
          break;

        case "angry":
          db.collection("posts")
            .doc(post.id)
            .update({
              postReactions: {
                like: [...post.postReactions.like],
                love: [...post.postReactions.love],
                care: [...post.postReactions.care],
                haha: [...post.postReactions.haha],
                wow: [...post.postReactions.wow],
                sad: [...post.postReactions.sad],
                angry: [...post.postReactions.angry, mainUsername],
              },
            });
          break;
      }
      console.log("Noo");
    }

    if (postReacted) {
      setPostReacted(null);
    } else {
      setPostReacted(e);
    }
  };

  const reaction_count = () => {
    return (
      post.postReactions.like.length +
      post.postReactions.love.length +
      post.postReactions.care.length +
      post.postReactions.haha.length +
      post.postReactions.wow.length +
      post.postReactions.sad.length +
      post.postReactions.angry.length
    );
  };

  const tempObj = {
    like: post.postReactions.like.length,
    love: post.postReactions.love.length,
    care: post.postReactions.care.length,
    haha: post.postReactions.haha.length,
    wow: post.postReactions.wow.length,
    sad: post.postReactions.sad.length,
    angry: post.postReactions.angry.length,
  };

  const sorted_reaction = Object.keys(tempObj).sort(
    (a, b) => tempObj[b] - tempObj[a]
  );
  const firstReaction = () => {
    switch (sorted_reaction[0]) {
      case "like":
        return (
          sorted_reaction[0] === "like" && (
            <img
              src="/assets/images/icons/small/like-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );
      case "love":
        return (
          sorted_reaction[0] === "love" && (
            <img
              src="/assets/images/icons/small/love-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "care":
        return (
          sorted_reaction[0] === "care" && (
            <img
              src="/assets/images/icons/small/care-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "haha":
        return (
          sorted_reaction[0] === "haha" && (
            <img
              src="/assets/images/icons/small/haha-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "wow":
        return (
          sorted_reaction[0] === "wow" && (
            <img
              src="/assets/images/icons/small/wow-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "sad":
        return (
          sorted_reaction[0] === "sad" && (
            <img
              src="/assets/images/icons/small/sad-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "angry":
        return (
          sorted_reaction[0] === "angry" && (
            <img
              src="/assets/images/icons/small/angry-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );
      default:
        return null;
    }
  };

  const secondReaction = () => {
    switch (sorted_reaction[1]) {
      case "like":
        return (
          sorted_reaction[1] === "like" && (
            <img
              src="/assets/images/icons/small/like-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );
      case "love":
        return (
          sorted_reaction[1] === "love" && (
            <img
              src="/assets/images/icons/small/love-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "care":
        return (
          sorted_reaction[1] === "care" && (
            <img
              src="/assets/images/icons/small/care-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "haha":
        return (
          sorted_reaction[1] === "haha" && (
            <img
              src="/assets/images/icons/small/haha-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "wow":
        return (
          sorted_reaction[1] === "wow" && (
            <img
              src="/assets/images/icons/small/wow-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "sad":
        return (
          sorted_reaction[1] === "sad" && (
            <img
              src="/assets/images/icons/small/sad-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "angry":
        return (
          sorted_reaction[1] === "angry" && (
            <img
              src="/assets/images/icons/small/angry-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );
      default:
        return null;
    }
  };

  const thirdReaction = () => {
    switch (sorted_reaction[2]) {
      case "like":
        return (
          sorted_reaction[2] === "like" && (
            <img
              src="/assets/images/icons/small/like-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );
      case "love":
        return (
          sorted_reaction[2] === "love" && (
            <img
              src="/assets/images/icons/small/love-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "care":
        return (
          sorted_reaction[2] === "care" && (
            <img
              src="/assets/images/icons/small/care-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "haha":
        return (
          sorted_reaction[2] === "haha" && (
            <img
              src="/assets/images/icons/small/haha-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "wow":
        return (
          sorted_reaction[2] === "wow" && (
            <img
              src="/assets/images/icons/small/wow-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "sad":
        return (
          sorted_reaction[2] === "sad" && (
            <img
              src="/assets/images/icons/small/sad-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );

      case "angry":
        return (
          sorted_reaction[2] === "angry" && (
            <img
              src="/assets/images/icons/small/angry-reaction.png"
              alt=""
              className="post__post_reaction_img"
            />
          )
        );
      default:
        return null;
    }
  };

  const firstReactionCount = () => {
    switch (sorted_reaction[0]) {
      case "like":
        if (post.postReactions.like.length !== 0) {
          return post.postReactions.like.length;
        }

        return false;
      case "love":
        if (post.postReactions.love.length !== 0) {
          return post.postReactions.love.length;
        }

        return false;
      case "care":
        if (post.postReactions.care.length !== 0) {
          return post.postReactions.care.length;
        }

        return false;
      case "haha":
        if (post.postReactions.haha.length !== 0) {
          return post.postReactions.haha.length;
        }

        return false;
      case "wow":
        if (post.postReactions.wow.length !== 0) {
          return post.postReactions.wow.length;
        }

        return false;
      case "sad":
        if (post.postReactions.sad.length !== 0) {
          return post.postReactions.sad.length;
        }

        return false;
      case "angry":
        if (post.postReactions.angry.length !== 0) {
          return post.postReactions.angry.length;
        }
        return false;
    }
  };

  const secondReactionCount = () => {
    switch (sorted_reaction[1]) {
      case "like":
        if (post.postReactions.like.length !== 0) {
          return post.postReactions.love.length;
        }
        return false;
      case "love":
        if (post.postReactions.love.length !== 0) {
          return post.postReactions.love.length;
        }
        return false;
      case "care":
        if (post.postReactions.care.length !== 0) {
          return post.postReactions.care.length;
        }
        return false;
      case "haha":
        if (post.postReactions.haha.length !== 0) {
          return post.postReactions.haha.length;
        }
        return false;
      case "wow":
        if (post.postReactions.wow.length !== 0) {
          return post.postReactions.wow.length;
        }
        return false;
      case "sad":
        if (post.postReactions.sad.length !== 0) {
          return post.postReactions.sad.length;
        }
        return false;
      case "angry":
        if (post.postReactions.angry.length !== 0) {
          return post.postReactions.angry.length;
        }
        return false;
    }
  };

  const thirdReactionCount = () => {
    switch (sorted_reaction[2]) {
      case "like":
        if (post.postReactions.like.length !== 0) {
          return post.postReactions.like.length;
        }
        return false;

      case "love":
        if (post.postReactions.love.length !== 0) {
          return post.postReactions.love.length;
        }
        return false;

      case "care":
        if (post.postReactions.care.length !== 0) {
          return post.postReactions.care.length;
        }
        return false;

      case "haha":
        if (post.postReactions.haha.length !== 0) {
          return post.postReactions.haha.length;
        }
        return false;

      case "wow":
        if (post.postReactions.wow.length !== 0) {
          return post.postReactions.wow.length;
        }
        return false;

      case "sad":
        if (post.postReactions.sad.length !== 0) {
          return post.postReactions.sad.length;
        }
        return false;

      case "angry":
        if (post.postReactions.angry.length !== 0) {
          return post.postReactions.angry.length;
        }
        return false;
    }
  };

  const postReaction = () => {
    switch (postReacted) {
      case "like":
        return (
          <>
            <img src="/assets/images/icons/small/like-reaction.png" alt="" />
            <span className="reaction__span_text_like">Like</span>
          </>
        );
      case "love":
        return (
          <>
            <img src="/assets/images/icons/small/love-reaction.png" alt="" />
            <span className="reaction__span_text_love">Love</span>
          </>
        );
      case "care":
        return (
          <>
            <img src="/assets/images/icons/small/care-reaction.png" alt="" />
            <span className="reaction__span_text_care">Care</span>
          </>
        );
      case "haha":
        return (
          <>
            <img src="/assets/images/icons/small/haha-reaction.png" alt="" />
            <span className="reaction__span_text_haha">Haha</span>
          </>
        );
      case "wow":
        return (
          <>
            <img src="/assets/images/icons/small/wow-reaction.png" alt="" />
            <span className="reaction__span_text_wow">Wow</span>
          </>
        );
      case "sad":
        return (
          <>
            <img src="/assets/images/icons/small/sad-reaction.png" alt="" />
            <span className="reaction__span_text_sad">Sad</span>
          </>
        );
      case "angry":
        return (
          <>
            <img src="/assets/images/icons/small/angry-reaction.png" alt="" />
            <span className="reaction__span_text_angry">angry</span>
          </>
        );
      default:
        return (
          <>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="post__like_comment_share_icon"
            />
            <span className="post__like_comment_share_text">Like</span>
          </>
        );
    }
  };

  // console.log(post);
  return (
    <div className="post__wrap">
      <div className="post__header">
        <div className="post__img_wrap">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="post__img"
          />
        </div>
        <div className="post__name_timestamp ">
          <h6 className="post__postname">{post.postUsername}</h6>
          <p className="post__posttimestamp">
            {post.postTimestamp &&
              timeDifference(
                new Date(),
                new Date(post.postTimestamp.seconds * 1000)
              )}
          </p>
        </div>
        <div className="post__moremenu">
          <Dropdown drop="left">
            <Dropdown.Toggle
              variant="success"
              className="post__moremenu_toggle"
            >
              <div className="post__moremenu_icon_wrap ">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  className="post__moremenu_icon"
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="post__dropdown_menu">
              <div className="post__dropdown_item">
                <FontAwesomeIcon
                  icon={faSave}
                  className="post__dropdown_item_icon"
                />
                Save Post
              </div>
              <div className="post__dropdown_item">
                <FontAwesomeIcon
                  icon={faBell}
                  className="post__dropdown_item_icon"
                />
                Turn on notification
              </div>

              <div className="post__dropdown_item">
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="post__dropdown_item_icon"
                />
                Hide Post
              </div>

              <div className="post__dropdown_item">
                <FontAwesomeIcon
                  icon={faClock}
                  className="post__dropdown_item_icon"
                />
                Snooze
              </div>

              <div className="post__dropdown_item">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="post__dropdown_item_icon"
                />
                Unfollow
              </div>

              <div className="post__dropdown_item">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="post__dropdown_item_icon"
                />
                Report Post
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <p className="post__main_text">{post.postText}</p>
      <img
        src="https://via.placeholder.com/150"
        alt=""
        className="post__main_img"
      />
      <div className="post__post_info">
        <div className="post__post_info_reactions">
          {/* Reaction */}
          {/* First Reaction */}
          {firstReactionCount() && firstReaction()}
          {/* Second Reaction */}
          {secondReactionCount() && secondReaction()}
          {/* Third Reaction */}
          {thirdReactionCount() && thirdReaction()}

          <span className="post__post_reactions_count">
            {reaction_count() !== 0 && reaction_count()}
          </span>
        </div>
        <div className="post__post_comments_count">
          <button className="post__post_comments_count_button">
            10 Comments
          </button>
        </div>
      </div>
      <div className="post__like_comment_share ">
        <div className="post__like ">
          {postReaction()}

          <div className="reaction-box"></div>
          <div className="reaction-like">
            <img
              src="/assets/images/icons/big/like-reaction.png"
              alt=""
              onClick={() => reactionInsert("like")}
            />
          </div>
          <div className="reaction-love">
            <img
              src="/assets/images/icons/big/love-reaction.png"
              alt=""
              onClick={() => reactionInsert("love")}
            />
          </div>
          <div className="reaction-care">
            <img
              src="/assets/images/icons/big/care-reaction.png"
              alt=""
              onClick={() => reactionInsert("care")}
            />
          </div>
          <div className="reaction-haha">
            <img
              src="/assets/images/icons/big/haha-reaction.png"
              alt=""
              onClick={() => reactionInsert("haha")}
            />
          </div>
          <div className="reaction-wow">
            <img
              src="/assets/images/icons/big/wow-reaction.png"
              alt=""
              onClick={() => reactionInsert("wow")}
            />
          </div>
          <div className="reaction-sad">
            <img
              src="/assets/images/icons/big/sad-reaction.png"
              alt=""
              onClick={() => reactionInsert("sad")}
            />
          </div>
          <div className="reaction-angry">
            <img
              src="/assets/images/icons/big/angry-reaction.png"
              alt=""
              onClick={() => reactionInsert("angry")}
            />
          </div>
        </div>
        <div className="post__comment ">
          <FontAwesomeIcon icon={faComment} />
          Comment
        </div>
        <div className="post__share ">
          <FontAwesomeIcon icon={faShareSquare} />
          Share
        </div>
      </div>
      <div className="post__comment_input_wrap">
        <div className="post__comment_input_img_wrap">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="post__comment_input_img"
          />
        </div>
        <div className="post__comment_textarea_wrap">
          <TextareaAutosize
            className="post__comment_textarea"
            onChange={handleTextarea}
            placeholder="Write a comment..."
          />
        </div>
      </div>
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
    </div>
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
export default Post;
