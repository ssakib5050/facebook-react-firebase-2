import React, { useState } from "react";
import "./PostInput.css";

import {
  FontAwesomeIcon,
  faVideo,
  faPhotoVideo,
  faLaugh,
} from "../../Fontawesome";
import TextareaAutosize from "react-textarea-autosize";
import { Modal, Button } from "react-bootstrap";

function PostInput() {
  const [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(true);
  };
  const modalClose = () => {
    setModal(false);
  };

  return (
    <div className="postinput_wrap ">
      <div className="postinput__container">
        <div className="postinput__header">
          <div className="postinput_img_wrap">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="postinput__img"
            />
          </div>
          <div className="postinput__placeholder" onClick={modalOpen}>
            <span className="postinput__placeholder_text">
              What's on your mind, alias?
            </span>
          </div>
        </div>
        <div className="postinput__icons_wrap">
          <div className="postinput__icon_wrap">
            <FontAwesomeIcon icon={faVideo} className="postinput__icon_video" />
            <span>Live Video</span>
          </div>
          <div className="postinput__icon_wrap">
            <FontAwesomeIcon
              icon={faPhotoVideo}
              className="postinput__icon_photovideo"
            />
            <span>Photo</span>
          </div>
          <div className="postinput__icon_wrap">
            <FontAwesomeIcon icon={faLaugh} className="postinput__icon_emoji" />
            <span>Feeling/Activity</span>
          </div>
        </div>
      </div>

      <Modal show={modal} onHide={modalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextareaAutosize
            className="postinput__textarea"
            // onChange={handleTextarea}
            placeholder="What's on your mind, alias?"
          />
          <div className="postinput__post_img_wrap">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="postinput__post_img"
            />

            <div className="postinput__post_cross">X</div>
          </div>

          <div className="float-right">
            <div
              className="postinput__icon_wrap justify-content-end"
              style={{ width: "100px!important" }}
            >
              <FontAwesomeIcon
                icon={faPhotoVideo}
                className="postinput__icon_photovideo"
              />
              <span>Photo</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="postinput__btn_submit btn-block" /*onClick={handleClose}*/
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PostInput;
