const url = "https://password-manager-api.azurewebsites.net/test/new";
import { fetchEntries } from "./GetAll";

export const newEntry = async (
  data,
  setSaving,
  setError,
  setSuccess,
  setEntryData,
  setClassNewPass,
  setAddNewButton
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSaving(false);
      setError(false);
      setSuccess(true);
      setTimeout(() => {
        fetchEntries(setEntryData);
        setSuccess(false);
        setClassNewPass("newPasswordHidden");
        setAddNewButton("+ Add New Entry");
      }, 2000);
    } else {
      setSuccess(false);
      setSaving(false);
      setError(true);
    }
  } catch (e) {
    setError(true);
    setSuccess(false);
    setSaving(false);
  }
};
