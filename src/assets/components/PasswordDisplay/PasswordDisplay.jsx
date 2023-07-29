import { useEffect, useState } from "react";
import { ErrorPopUp } from "../errorPopUp/ErrorPopUp";
import { PlaceholderPassword } from "./PasswordPlaceholder/PlaceholderPassword";
import { PasswordItem } from "./PasswordItem/PasswordItem";
import { fetchEntries } from "../../data/GetAll";

export const PasswordDisplay = () => {
  //manage the entry data
  const [entryData, setEntryData] = useState(null);

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
      {entryData.map((entry) => {
        const { id } = entry;
        return <PasswordItem entry={entry} key={id} />;
      })}
    </section>
  );
};
