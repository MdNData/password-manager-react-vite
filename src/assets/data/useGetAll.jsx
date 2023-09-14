import { useEffect, useState } from "react";

const urlAll =
  "https://password-manager-api20230910103433.azurewebsites.net//test";

const useGetAll = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch(urlAll);
        let entryList = await response.json();
        entryList.reverse();
        if (response.ok) {
          setData(entryList);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setData("");
          setIsError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setData("");
      }
    };
    fetchEntries();
  }, []);

  return { isLoading, isError, data };
};

export default useGetAll;
