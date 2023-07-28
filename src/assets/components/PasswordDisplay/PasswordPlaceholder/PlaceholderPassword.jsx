import logo from "../../../imgs/logo.png";

export const PlaceholderPassword = ({ text }) => {
  return (
    <section className="password-container-placeholder">
      <article className="password-container animated-background">
        <div className="identifier">
          <img src={logo} alt="loading" />
          <p>
            Usage :
            <input type="text" defaultValue={text} />
          </p>
        </div>
        <div className="data-container">
          <p>
            User :
            <input type="text" defaultValue={text} />
          </p>
          <p>
            Password :
            <input type="text" defaultValue={text} />
          </p>
        </div>
      </article>
    </section>
  );
};
