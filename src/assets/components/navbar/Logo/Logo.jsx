import { useState } from "react";
import { dataLogo } from "../../Logo/dataLogo";
import useDetectScreenSize from "../../hooks/useDetectScreenSize";

export const Logo = () => {
  const { width } = useDetectScreenSize();

  return (
    <div className="nav-logo">
      <a href="/password-manager-react-vite/">
        <img src={dataLogo.logo} alt={dataLogo.logoDescription} />
        {width > 425 ? (
          <h2>{dataLogo.name}</h2>
        ) : (
          <h2>{dataLogo.shorterName}</h2>
        )}
      </a>
    </div>
  );
};
