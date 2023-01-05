import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import AvatarEditor from "react-avatar-editor";
import { useServices } from "../../services";

function Profile() {
  var editor = "";
  const inputFileRef = useRef(null);

  const { t } = useTranslation();
  const { user, userProfile } = useServices();

  const [username, setUsername] = useState(userProfile.full_name);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setUsername(userProfile.username);
    setFullName(userProfile.full_name);
  }, [userProfile]);

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

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      let url = URL.createObjectURL(e.target.files[0]);
      setPicture({
        ...picture,
        img: url,
        zoom: 2,
        cropperOpen: true,
      });
    }
  };

  const handleSlider = (e) => {
    e.preventDefault();
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

    inputFileRef.current.value = null;
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

      inputFileRef.current.value = null;
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
            value={user.email || ""}
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
            <label htmlFor="formFile" className="form-label mb-3">
              Default file input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleFileChange}
              ref={inputFileRef}
            />
          </div>
          <div className="col-2">
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
              <label htmlFor="zoomSlider" className="form-label">
                Zoom ({picture.zoom * 10})
              </label>
              <input
                type="range"
                className="form-range mb-3"
                min="1"
                max="10"
                step="0.1"
                onChange={handleSlider}
                id="zoomSlider"
                value={picture.zoom}
              />
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleApply}
                >
                  Apply
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
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
