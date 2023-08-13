const url = "https://password-manager-api.azurewebsites.net/test/new";

export const newEntry = async (data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("success");
    } else {
      console.log("error");
    }
  } catch (e) {
    console.log(e);
  }
};
