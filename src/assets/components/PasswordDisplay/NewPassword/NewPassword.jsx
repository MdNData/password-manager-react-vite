import { useState } from "react";
import { newEntry } from "../../../data/NewEntry";
import Saving from "../Saving/Saving";

export const NewPassword = ({ className }) => {

  //Data to send 
  const [imgLink, setImgLink] = useState(
    "https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
  );

  const [site, setSite] = useState("www.password-manager.com");

  const [email, setEmail] = useState("Username");

  const [pass, setPass] = useState("Password");

  //check saving
  const [disableInput, setDisableInput] = useState(false);

  const [saving, setSaving] = useState(false);

  

  const handleSubmit = (e) => {
    e ? e.preventDefault() : "";

    {
      /* Saving  */
    }
    if (saving) {
      return;
    } else {
      setDisableInput(true);
      setSaving(true);
      const newEntryData = {
        email: "test",
        imgsrc: imgLink,
        site,
        user: email,
        pass,
      };

      newEntry(newEntryData);
    }
  };

  return (
    <article className={className}>
      <form onSubmit={handleSubmit}>
        <div className="identifier">
          <img src={imgLink} alt="" />
          <p style={{ marginBottom: "20px" }}>
            Image Link :
            <input
              disabled={disableInput}
              type="text"
              placeholder={imgLink}
              onChange={(e) => {
                setImgLink(e.target.value);
              }}
            />
          </p>
          <br />
          <p>
            Usage:
            <input
              disabled={disableInput}
              type="text"
              placeholder={site}
              onChange={(e) => {
                setSite(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="data-container view">
          <p>
            User :
            <input
              disabled={disableInput}
              type="text"
              placeholder={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </p>
          <p>
            Password :
            <input
              disabled={disableInput}
              type="text"
              placeholder={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </p>
          <div>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
      {saving ? <Saving /> : ""}
    </article>
  );
};
