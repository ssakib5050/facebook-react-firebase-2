import React, { useState } from "react";
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
import { Dropdown } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import PostComment from "../PostComment/PostComment";

function Post() {
  const [textarea, setTextarea] = useState("");
  const handleTextarea = (e) => {};
  return (
    <div className="post__wrap">
      <div className="post__header dev">
        <div className="post__img_wrap">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="post__img"
          />
        </div>
        <div className="post__name_timestamp dev">
          <h6 className="post__postname">Rajib Khan</h6>
          <p className="post__posttimestamp">13h</p>
        </div>
        <div className="post__moremenu">
          <Dropdown drop="left">
            <Dropdown.Toggle
              variant="success"
              className="post__moremenu_toggle"
            >
              <div className="post__moremenu_icon_wrap dev">
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
      <p className="post__main_text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo corrupti
        sunt assumenda rerum officia facere. Id voluptatem ipsam enim corrupti?
      </p>
      <img
        src="https://via.placeholder.com/150"
        alt=""
        className="post__main_img"
      />
      <div className="post__post_info">
        <div className="post__post_info_reactions">
          <img
            src="/assets/images/icons/small/like-reaction.png"
            alt=""
            className="post__post_reaction_img"
          />
          <img
            src="/assets/images/icons/small/love-reaction.png"
            alt=""
            className="post__post_reaction_img"
          />
          <img
            src="/assets/images/icons/small/care-reaction.png"
            alt=""
            className="post__post_reaction_img"
          />
          {/* <img src="/assets/images/icons/small/haha-reaction.png" alt="" /className="post__post_reaction_img">
          <img src="/assets/images/icons/small/wow-reaction.png" alt="" className="post__post_reaction_img"/>
          <img src="/assets/images/icons/small/sad-reaction.png" alt="" className="post__post_reaction_img"/>
          <img src="/assets/images/icons/small/angry-reaction.png" alt="" className="post__post_reaction_img"/> */}

          <span className="post__post_reactions_count">1</span>
        </div>
        <div className="post__post_comments_count">
          <button className="post__post_comments_count_button">
            10 Comments
          </button>
        </div>
      </div>
      <div className="post__like_comment_share ">
        <div className="post__like ">
          <FontAwesomeIcon icon={faThumbsUp} />
          Like
          <div className="reaction-box"></div>
          <div className="reaction-like">
            <img src="/assets/images/icons/big/like-reaction.png" alt="" />
          </div>
          <div className="reaction-love">
            <img src="/assets/images/icons/big/love-reaction.png" alt="" />
          </div>
          <div className="reaction-care">
            <img src="/assets/images/icons/big/care-reaction.png" alt="" />
          </div>
          <div className="reaction-haha">
            <img src="/assets/images/icons/big/haha-reaction.png" alt="" />
          </div>
          <div className="reaction-wow">
            <img src="/assets/images/icons/big/wow-reaction.png" alt="" />
          </div>
          <div className="reaction-sad">
            <img src="/assets/images/icons/big/sad-reaction.png" alt="" />
          </div>
          <div className="reaction-angry">
            <img src="/assets/images/icons/big/angry-reaction.png" alt="" />
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

export default Post;
