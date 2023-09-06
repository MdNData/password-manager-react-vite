import { useState } from "react";
import { LoginButton } from "./LoginButton/LoginButton";
import { Logo } from "./Logo/Logo";
import MenuButton from "./MenuButton/MenuButton";
import MenuList from "./MenuList/MenuList";

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <div>
      <nav>
        <div className="nav-upper-container">
          <Logo />
          <LoginButton />
          <MenuButton menuState={menuState} setMenuState={setMenuState} />
        </div>
        <MenuList menuState={menuState} />
      </nav>
    </div>
  );
};
