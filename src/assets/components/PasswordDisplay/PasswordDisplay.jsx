import { useEffect, useState } from "react";
import { ErrorPopUp } from "../errorPopUp/ErrorPopUp";
import { PlaceholderPassword } from "./PasswordPlaceholder/PlaceholderPassword";
import { PasswordItem } from "./PasswordItem/PasswordItem";
import { fetchEntries } from "../../data/GetAll";
import { NewPassword } from "./NewPassword/NewPassword";

export const PasswordDisplay = () => {
  //manage the entry data
  const [entryData, setEntryData] = useState(null);
  const [classNewPass, setClassNewPass] = useState("newPasswordHidden");
  const [addNewButton, setAddNewButton] = useState("+ Add New Entry");

  //toggle new password field
  const displayNewPassword = () => {
    if (classNewPass == "newPasswordHidden") {
      setClassNewPass("newPasswordVisible");
      setAddNewButton("Never Mind");
    } else {
      setClassNewPass("newPasswordHidden");
      setAddNewButton("+ Add New Entry");
    }
  };

  useEffect(() => {
    //get all Pass
    fetchEntries(setEntryData);
  }, []);

  //if the entry data are still not loaded from the db
  if (entryData === null) {
    return <PlaceholderPassword text="Loading" />;
  }

  //if there is an error with the connection
  if (entryData === "error") {
    return <ErrorPopUp />;
  }

  //if the data are loaded correctly
  return (
    //main container for the passwords fields
    <section className="password-display-container">
      {/* BUTTONS */}
      <div className="buttons-container-password">
        <div className="button">
          <div>
            <span onClick={displayNewPassword}>{addNewButton}</span>
          </div>
        </div>
        <div className="button">
          <div>
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>

      {/* NEW PASSWORD FORM */}
      <NewPassword className={classNewPass} />

      {/* PASSWORDS LIST */}
      {entryData.map((entry) => {
        const { id } = entry;
        return <PasswordItem entry={entry} key={id} />;
      })}
    </section>
  );
};
