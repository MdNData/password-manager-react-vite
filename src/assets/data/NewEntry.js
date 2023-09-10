const url =
  "https://password-manager-api20230910103433.azurewebsites.net//test/new";

export const newEntry = async (data, setSaving, setError, setSuccess) => {
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
        location.reload();
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
