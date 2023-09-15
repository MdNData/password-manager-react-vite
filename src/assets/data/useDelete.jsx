import { useState } from "react";

const url =
  "https://password-manager-api20230910103433.azurewebsites.net//test/delete";

export const useDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteEntry = async (data) => {
    try {
      setIsDeleting(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("deleted");
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log("not deleted before");
    }
  };

  return { deleteEntry };
};
