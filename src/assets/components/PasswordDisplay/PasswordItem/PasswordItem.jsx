import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useDelete } from "../../../data/useDelete";

export const PasswordItem = ({ entry }) => {
  const { id, email, imgsrc, site, user, pass } = entry;
  const [displayIt, setDisplayIt] = useState(false);
  const { deleteEntry } = useDelete();
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
      <div className={displayIt ? "password-buttons view" : "password-buttons"}>
        <button title="Edit">
          <FaEdit />
        </button>
        <button
          title="Delete"
          onClick={() => {
            deleteEntry({ id: id.toString() }, setDisplayIt, displayIt);
          }}
        >
          <RiDeleteBin2Fill />
        </button>
      </div>
    </article>
  );
};
