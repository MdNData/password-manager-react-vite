import { dataLogo } from "../../Logo/dataLogo";

export const Logo = () => {
  return (
    <div className="nav-logo">
      <a href="/password-manager-react-vite/">
        <img src={dataLogo.logo} alt={dataLogo.logoDescription} />
        {
          //check if the with is enought to visualize the entire name or only the shorter one
        }
        {window.innerWidth > 425 ? (
          <h2>{dataLogo.name}</h2>
        ) : (
          <h2>{dataLogo.shorterName}</h2>
        )}
      </a>
    </div>
  );
};
