export const PasswordItem = ({ entry }) => {
  const { id, email, imgsrc, site, user, pass } = entry;
  return (
    <article id={id}>
      <div className="identifier">
        <img src={imgsrc} alt="" />
        <p>
          Usage :
          <input type="text" defaultValue={site} />
        </p>
      </div>
      <div className="data-container">
        <p>
          User :
          <input type="text" defaultValue={user} />
        </p>
        <p>
          Password :
          <input type="text" defaultValue={pass} />
        </p>
      </div>
    </article>
  );
};
