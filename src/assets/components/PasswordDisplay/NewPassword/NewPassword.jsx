import { useState } from "react";
import { newEntry } from "../../../data/NewEntry";

export const NewPassword = ({ className }) => {
  const [imgLink, setImgLink] = useState(
    "https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
  );

  const [site, setSite] = useState("www.password-manager.com");

  const [email, setEmail] = useState("Username");

  const [pass, setPass] = useState("Password");

  const handleSubmit = (e) => {
    e ? e.preventDefault() : "";
    const newEntryData = {
      email: "test",
      imgsrc: imgLink,
      site,
      user: email,
      pass,
    };

    newEntry(newEntryData);
  };

  return (
    <article className={className}>
      <form onSubmit={handleSubmit}>
        <div className="identifier">
          <img src={imgLink} alt="" />
          <p style={{ marginBottom: "20px" }}>
            Image Link :
            <input
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
    </article>
  );
};
