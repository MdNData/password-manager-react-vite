export const NewPassword = ({className}) => {

  return (
    <article className={className}>
      <div className="identifier">
        <img
          src="https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
          alt=""
        />
        <p style={{ marginBottom: "20px" }}>
          Image Link :
          <input type="text" />
        </p>
        <br />
        <p>
          Usage:
          <input type="text" />
        </p>
      </div>
      <div className="data-container view">
        <p>
          User :
          <input type="text" />
        </p>
        <p>
          Password :
          <input type="text" name="" id="" />
        </p>
        <div>
          <button>Save</button>
        </div>
      </div>
    </article>
  );
};
