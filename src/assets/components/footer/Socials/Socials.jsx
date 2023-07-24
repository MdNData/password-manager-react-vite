import { dataSocials } from "./dataSocials";
import { dataLogo } from "../../Logo/dataLogo";

export const Socials = () => {
  return (
    <div className="socials">
      <div>
        <img src={dataLogo.logo} alt={dataLogo.logoDescription} />
        <h3>{dataLogo.name}</h3>
      </div>
      <div>
        {dataSocials.map((social, key) => {
          return (
            <a href={social.socialLink} title={social.socialTitle} key={key} target="_blank">
              <i className={social.socialClass}></i>
            </a>
          );
        })}
      </div>
    </div>
  );
};
