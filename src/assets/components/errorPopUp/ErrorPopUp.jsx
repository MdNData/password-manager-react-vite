import ConnectionErrorImage from "../../imgs/connection-error.webp";
export const ErrorPopUp = ({ message }) => {
  return (
    <div className="error-pop-up">
      <div className="internal-pop-up-container">
        <img src={ConnectionErrorImage} alt="" />
        <h3>Oooopsy!</h3>
        <p>
          The connection is in its lunch break, try to reload the page, if the
          problem persists, try again later.
        </p>
        <button
          onClick={() => {
            window.location.href = window.location.href;
          }}
        >
          Reload
        </button>
      </div>
    </div>
  );
};
