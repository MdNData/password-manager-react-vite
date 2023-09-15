import { useState } from "react";
import Saving from "../Saving/Saving";
import Success from "../Success/Success";
import Error from "../Error/Error";
import { useNewEntry } from "../../../data/useNewEntry";
import { usePasswordDisplayContext } from "../PasswordDisplay";
import { ToggleNewPassword } from "../NewPassword/toggleNewPassword";

export const NewPassword = ({ reloadGetAll }) => {
  const { classNewPass, setClassNewPass, setAddNewButton } =
    usePasswordDisplayContext();
  //Data to send
  const [imgLink, setImgLink] = useState("");
  const [site, setSite] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //check saving
  const { isLoading, isSuccess, send, isError } = useNewEntry();

  const clearEntries = () => {
    setImgLink("");
    setSite("");
    setEmail("");
    setPass("");
  };

  const handleSubmit = (e) => {
    e ? e.preventDefault() : "";

    {
      /* Saving  */
    }
    if (isLoading && !isSuccess) {
      return;
    } else {
      send(
        {
          email: "test",
          imgsrc: imgLink,
          site,
          user: email,
          pass,
        },
        clearEntries,
        setClassNewPass,
        setAddNewButton,
        reloadGetAll
      );
    }
  };

  return (
    <>
      {/* BUTTONS */}
      <div className="buttons-container-password">
        <ToggleNewPassword error={isError} />
      </div>
      <article className={classNewPass}>
        <form onSubmit={handleSubmit}>
          <div className="identifier">
            <img src={imgLink} alt="" />
            <p style={{ marginBottom: "20px" }}>
              Image Link :
              <input
                type="text"
                placeholder={
                  "https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
                }
                value={imgLink}
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
                value={site}
                placeholder={"www.password-manager.com"}
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
                value={email}
                placeholder={"Username"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </p>
            <p>
              Password :
              <input
                type="text"
                value={pass}
                placeholder={"Password"}
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

        {isLoading ? <Saving /> : ""}

        {isSuccess ? <Success /> : ""}

        {isError ? <Error /> : ""}
      </article>
    </>
  );
};
