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
          <input type="text" defaultValue={site} disabled />
        </p>
        <div></div>
        <button>
          <i
            onClick={() => {
              setDisplayIt(!displayIt);
            }}
            className={
              displayIt
                ? "open fa-solid fa-chevron-down"
                : "fa-solid fa-chevron-down"
            }
          ></i>
        </button>
      </div>
      <div className={displayIt ? "data-container view" : "data-container"}>
        <p>
          User :
          <input type="text" defaultValue={user} disabled />
        </p>
        <p>
          Password :
          <input type="text" defaultValue={pass} disabled />
        </p>
      </div>
    </article>
  );
};
