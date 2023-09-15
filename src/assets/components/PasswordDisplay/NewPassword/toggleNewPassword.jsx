import { useNewEntry } from "../../../data/useNewEntry";
import { usePasswordDisplayContext } from "../PasswordDisplay";

export const ToggleNewPassword = ({ error }) => {
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
        <span>
          <button disabled={error} onClick={toggleNewPassword}>
            {addNewButton}
          </button>
        </span>
      </div>
    </div>
  );
};
