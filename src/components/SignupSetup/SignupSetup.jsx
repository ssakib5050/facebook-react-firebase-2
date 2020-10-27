import React, { useState } from "react";
import "./SignupSetup.css";
import { v4 as uuidv4 } from "uuid";

import { auth, storage } from "../../firebase";
import { useHistory } from "react-router-dom";

function SignupSetup() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const [setupError, setSetupError] = useState("");
  const [setupSubmitted, setSetupSubmitted] = useState("");

  const setupHandle = (e) => {
    e.preventDefault();
    if (!name) {
      return setSetupError("Enter your full name");
    }
    if (!fileUpload) {
      return setSetupError("Upload a profile photo");
    }

    setSetupSubmitted(true);
    const user = auth.currentUser;

    if (name && imageFileTypeMatch(fileUpload.name)) {
      const file = fileUpload;
      const uploadTask = storage
        .ref()
        .child(`images/${uuidv4()}.${fileUpload.name}`)
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          setupError("Sorry Something Went Wrong");
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            // console.log(fullName);

            user
              .updateProfile({
                displayName: name,
                photoURL: downloadUrl,
              })
              .then(function () {
                // Update successful.
                history.push("/");
              })
              .catch(function (error) {
                // An error happened.

                setSetupError(error);
              });
          });
        }
      );
      //
    } else {
      // setSingupSetup("Sorry Something went wrong");
    }
    //
    //
  };
  return (
    <div className="login_wrap">
      <div className="login__bg">
        <div className="login__main container" style={{ height: "100vh" }}>
          <div className="login__form ">
            <form action="" className="login__form_wrap">
              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-3"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <div className="custom-file mb-2" style={{ overflow: "hidden" }}>
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFileLang"
                  onChange={(e) => setFileUpload(e.target.files[0])}
                />
                <label className="custom-file-label" htmlFor="customFileLang">
                  {fileUpload ? fileUpload.name : "Upload File"}
                </label>
              </div>

              <p className="text-danger">{setupError}</p>
              <input
                type="submit"
                value="Continue"
                className={`login__button ${setupSubmitted && "active"}`}
                onClick={setupHandle}
              />
            </form>
          </div>
        </div>
      </div>
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
export default SignupSetup;
