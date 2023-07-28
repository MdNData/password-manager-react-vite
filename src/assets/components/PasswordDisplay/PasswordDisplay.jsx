import { useEffect, useState } from "react";
import { ErrorPopUp } from "../errorPopUp/ErrorPopUp";
import { PlaceholderPassword } from "./PasswordPlaceholder/PlaceholderPassword";
import { PasswordItem } from "./PasswordItem/PasswordItem";
const urlAll = "https://password-manager-api.azurewebsites.net/testing/getall";

export const PasswordDisplay = () => {
  //manage the entry data
  const [entryData, setEntryData] = useState(null);

  useEffect(() => {
    //get data from api
    const fetchEntries = async () => {
      try {
        const response = await fetch(urlAll);
        let entryList = await response.json();
        entryList.reverse();
        setEntryData(entryList);
      } catch (error) {
        setEntryData("errore");
      }
    };
    fetchEntries();
  }, []);

  //if the entry data are still not loaded from the db
  if (entryData === null) {
    return <PlaceholderPassword text="Loading" />;
  }

  //if there is an error with the connection
  if (entryData === "errore") {
    return <ErrorPopUp message="Connection error, please try again later." />;
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
