import { usePasswordDisplayContext } from "../PasswordDisplay";

export const ToggleNewPassword = () => {
  const { addNewButton, classNewPass, setAddNewButton, setClassNewPass } =
    usePasswordDisplayContext();

  const toggleNewPassword = () => {
    if (classNewPass == "newPasswordHidden") {
      setClassNewPass("newPasswordVisible");
      setAddNewButton("Never Mind");
    } else {
      setClassNewPass("newPasswordHidden");
      setAddNewButton("+ Add New Entry");
    }
  };

  return (
    <div className="button">
      <div>
        <span onClick={toggleNewPassword}>{addNewButton}</span>
      </div>
    </div>
  );
};
