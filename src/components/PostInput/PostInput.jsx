import React, { useState } from "react";
import "./PostInput.css";

import { v4 as uuidv4 } from "uuid";
import {
  FontAwesomeIcon,
  faVideo,
  faPhotoVideo,
  faLaugh,
} from "../../Fontawesome";
import { auth, firebase, db, storage } from "../../firebase";
import TextareaAutosize from "react-textarea-autosize";
import { Modal, Button } from "react-bootstrap";

function PostInput() {
  const user = auth.currentUser;
  const [modal, setModal] = useState(false);

  const [postModalInput, setPostModalInput] = useState("");
  const [postModalImage, setPostModalImage] = useState("");

  const modalOpen = () => {
    setModal(true);
  };
  const modalClose = () => {
    setModal(false);
  };

  const postInputhandle = () => {
    if (postModalInput) {
      // Post Without Image
      db.collection("posts")
        .add({
          postProfileImage: user.photoURL,
          postUsername: user.displayName,
          postTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
          postText: postModalInput,
          postImage: "",

          postReactions: {
            like: [],
            love: [],
            care: [],
            haha: [],
            wow: [],
            sad: [],
            angry: [],
          },
        })
        .then(() => {
          setPostModalInput("");
          modalClose();
        });
    }

    if (postModalImage && postModalInput) {
      // With Image
      if (imageFileTypeMatch(postModalImage.name)) {
        const file = postModalImage;

        const uploadTask = storage
          .ref()
          .child(`images/${uuidv4()}.${postModalImage.name}`)
          .put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");

            // setPostProgress(progress + 1);
          },
          (error) => {
            console.log(error);
            // setPostTweeting(false);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
              console.log(downloadUrl);

              setPostModalInput(null);
              setPostModalImage(null);
              db.collection("posts").add({
                postProfileImage: user.photoURL,
                postUsername: user.displayName,
                postTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
                postText: postModalInput,
                postImage: downloadUrl,

                postReactions: {
                  like: [],
                  love: [],
                  care: [],
                  haha: [],
                  wow: [],
                  sad: [],
                  angry: [],
                },
              });
            });
          }
        );
      }
    }
  };

  return (
    <div className="postinput_wrap ">
      <div className="postinput__container">
        <div className="postinput__header">
          <div className="postinput_img_wrap">
            <img
              src={user ? user.photoURL : "https://via.placeholder.com/150"}
              alt=""
              className="postinput__img"
            />
          </div>
          <div className="postinput__placeholder" onClick={modalOpen}>
            <span className="postinput__placeholder_text">
              What's on your mind, {user && user.displayName}?
            </span>
          </div>
        </div>
        <div className="postinput__icons_wrap">
          <div className="postinput__icon_wrap" onClick={modalOpen}>
            <FontAwesomeIcon icon={faVideo} className="postinput__icon_video" />
            <span>Live Video</span>
          </div>
          <div className="postinput__icon_wrap" onClick={modalOpen}>
            <FontAwesomeIcon
              icon={faPhotoVideo}
              className="postinput__icon_photovideo"
            />
            <span>Photo</span>
          </div>
          <div className="postinput__icon_wrap" onClick={modalOpen}>
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
            onChange={(e) => setPostModalInput(e.target.value)}
            value={postModalInput}
            placeholder={`What's on your mind, ${user && user.displayName}?`}
          />
          {postModalImage && (
            <div className="postinput__post_img_wrap">
              <img
                src={window.URL.createObjectURL(postModalImage)}
                alt=""
                className="postinput__post_img"
              />

              <div
                className="postinput__post_cross"
                onClick={() => setPostModalImage(null)}
              >
                X
              </div>
            </div>
          )}

          <div className="float-right">
            <label
              htmlFor="fileInput"
              className="postinput__icon_wrap justify-content-end"
              style={{ width: "100px!important" }}
            >
              <FontAwesomeIcon
                icon={faPhotoVideo}
                className="postinput__icon_photovideo"
              />
              <span>Photo</span>
              <input
                type="file"
                className="d-none"
                id="fileInput"
                onChange={(e) => setPostModalImage(e.target.files[0])}
                accept="image/x-png,image/gif,image/jpeg"
              />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="postinput__btn_submit btn-block"
            onClick={postInputhandle}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
function imageFileTypeMatch(filename) {
  const fileType = filename.split(".").pop();
  if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
    return true;
  }
  return false;
}
export default PostInput;
