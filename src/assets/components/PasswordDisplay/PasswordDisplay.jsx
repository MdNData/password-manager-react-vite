import { createContext, useContext, useState } from "react";
import { ErrorPopUp } from "../errorPopUp/ErrorPopUp";
import { PlaceholderPassword } from "./PasswordPlaceholder/PlaceholderPassword";
import { PasswordItem } from "./PasswordItem/PasswordItem";
import { NewPassword } from "./NewPassword/NewPassword";
import useGetAll from "../../data/useGetAll";
import { ToggleNewPassword } from "./NewPassword/toggleNewPassword";

export const PasswordDisplayContext = createContext();

export const usePasswordDisplayContext = () =>
  useContext(PasswordDisplayContext);

export const PasswordDisplay = () => {
  //manage the new password button
  const [classNewPass, setClassNewPass] = useState("newPasswordHidden");
  const [addNewButton, setAddNewButton] = useState("+ Add New Entry");

  //get data from db manager
  const { isLoading, isError, data, reloadGetAll } = useGetAll();

  //if the entry data are still not loaded from the db
  if (isLoading) {
    return <PlaceholderPassword text="Loading" />;
  }

  //if there is an error with the connection
  if (isError) {
    return <ErrorPopUp />;
  }

  //if the data are loaded correctly
  return (
    <PasswordDisplayContext.Provider
      value={{ addNewButton, classNewPass, setClassNewPass, setAddNewButton }}
    >
      <section className="password-display-container">
        {/* BUTTONS */}
        <div className="buttons-container-password">
          <ToggleNewPassword />
        </div>

        {/* NEW PASSWORD FORM */}
        <NewPassword reloadGetAll={reloadGetAll} />

        {/* PASSWORDS LIST */}
        {data.map((entry) => {
          const { id } = entry;
          return <PasswordItem entry={entry} key={id} />;
        })}
      </section>
    </PasswordDisplayContext.Provider>
  );
};
