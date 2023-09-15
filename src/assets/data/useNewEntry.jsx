import { useState } from "react";

const url =
  "https://password-manager-api20230910103433.azurewebsites.net//test/new";

export const useNewEntry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        setTimeout(() => {
          setClassNewPass("newPasswordHidden");
          setAddNewButton("+ Add New Entry");
          setIsSuccess(false);
          clearEntries();
          reloadGetAll();
        }, 2000);
      } else {
        setIsLoading(false);
        setIsSuccess(false);
      }
    } catch (e) {
      setIsSuccess(false);
      setIsLoading(false);
    }
  };

  return { isLoading, send, isSuccess };
};
