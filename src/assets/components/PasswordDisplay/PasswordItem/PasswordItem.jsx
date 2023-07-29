import { useState } from "react";

export const PasswordItem = ({ entry }) => {
  const { id, email, imgsrc, site, user, pass } = entry;
  const [displayIt, setDisplayIt] = useState(false);
  return (
    <article id={id}>
      <div className="identifier">
        <img src={imgsrc} alt="" />
        <p>
          Usage :
          <input type="text" defaultValue={site} />
        </p>
        <div></div>
        <button
          onClick={() => {
            displayIt ? setDisplayIt(false) : setDisplayIt(true);
          }}
        >
          <i
            className={
              displayIt
                ? "open fa-solid fa-chevron-down"
                : "fa-solid fa-chevron-down"
            }
          ></i>
        </button>
      </div>
      {displayIt && (
        <div className="data-container">
          <p>
            User :
            <input type="text" defaultValue={user} />
          </p>
          <p>
            Password :
            <input type="text" defaultValue={pass} />
          </p>
        </div>
      )}
    </article>
  );
};
