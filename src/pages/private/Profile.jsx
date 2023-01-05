import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AvatarEditor from "react-avatar-editor";
import { useServices } from "../../services";

function Profile() {
  var editor = "";
  const { t } = useTranslation();
  const { user, userProfile } = useServices();

  console.log("profile user", user);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png",
  });

  const setEditorRef = (ed) => {
    editor = ed;
  };

  // useEffect(() => {
  //   if (user && userProfile) {
  //     setEmail(user.email);
  //     setUsername(userProfile.username);
  //     setFullName(userProfile.full_name);
  //   }
  // }, [user, userProfile]);

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true,
    });
  };

  const handleSlider = (e) => {
    e.preventDefault();
    console.log("value", e.target.value);
    setPicture({
      ...picture,
      zoom: e.target.value,
    });
  };

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false,
    });
  };

  const handleApply = (e) => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg,
      });
    }
  };

  return (
    <div>
      <h2>{t("Profile")}</h2>
      <form>
        <div className="col-3 mb-3">
          <label htmlFor="user.email" className="form-label">
            {t("Email address")}
          </label>
          <input
            type="email"
            className="form-control"
            id="user.email"
            aria-describedby="emailHelp"
            readOnly
            value={email || ""}
          />
          <div id="emailHelp" className="form-text">
            {t("We'll never share your email with anyone else.")}
          </div>
        </div>

        <div className="col-3 mb-3">
          <label htmlFor="user.username" className="form-label">
            {t("Username")}
          </label>
          <input
            type="text"
            className="form-control"
            id="user.username"
            defaultValue={username || ""}
            maxLength={12}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="col-3 mb-3">
          <label htmlFor="user.fullname" className="form-label">
            {t("Full Name")}
          </label>
          <input
            type="text"
            className="form-control"
            id="user.fullname"
            defaultValue={fullName || ""}
            maxLength={12}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <div className="col-3">
            <label htmlFor="formFile" className="form-label">
              Default file input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleFileChange}
            />
          </div>
          <div className="col-1">
            <p>Preview</p>
            <img
              src={picture.croppedImg}
              width={48}
              className="rounded-circle"
              alt="Avatar Preview"
            />
          </div>
        </div>
        {picture.cropperOpen && (
          <div className="row mb-3">
            <div className="col-3">
              <AvatarEditor
                ref={setEditorRef}
                image={picture.img}
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={picture.zoom}
                rotate={0}
                backgroundColor="#ddd"
                borderRadius={125}
                className="border border-warning rounded-2"
              />
            </div>
            <div className="col-3">
              <label for="zoomSlider" class="form-label">
                Zoom ({picture.zoom})
              </label>
              <input
                type="range"
                className="form-range mb-3"
                min="1"
                max="10"
                step="0.1"
                onChange={handleSlider}
                id="zoomSlider"
              />
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={handleApply}
                >
                  Apply
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Profile;
