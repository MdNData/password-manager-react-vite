const urlAll = "https://password-manager-api.azurewebsites.net/test";

//get data from api
export const fetchEntries = async (setEntryData) => {
  try {
    const response = await fetch(urlAll);
    let entryList = await response.json();
    entryList.reverse();
    if (response.ok) {
      setEntryData(entryList);
    } else {
      setEntryData("error");
    }
  } catch (error) {
    setEntryData("error");
  }
};
