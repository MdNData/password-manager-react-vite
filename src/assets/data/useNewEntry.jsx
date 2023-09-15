import { useState } from "react";

const url =
  "https://password-manager-api20230910103433.azurewebsites.net//test/new";

export const useNewEntry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const send = async (
    data,
    clearEntries,
    setClassNewPass,
    setAddNewButton,
    reloadGetAll
  ) => {
    try {
      setIsLoading(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
        setTimeout(() => {
          setClassNewPass("newPasswordHidden");
          setAddNewButton("+ Add New Entry");
          setIsSuccess(false);
          clearEntries();
          reloadGetAll();
        }, 2000);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return { isLoading, send, isSuccess, isError };
};
