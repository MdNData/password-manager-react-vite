const Error = () => {
  return (
    <div className="error-new-password">
      <div className="center-internal">
        <p>Unable to save</p>
        <p>Please try again</p>
        <div className="error-container">
          <div className="circle-border"></div>
          <div className="circle">
            <div className="error"></div>
          </div>
        </div>
        <button
          onClick={() => {
            location.reload();
          }}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default Error;
