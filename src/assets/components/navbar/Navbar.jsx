import { LoginButton } from "./LoginButton/LoginButton";
import { Logo } from "./Logo/Logo";
import { MenuButton } from "./MenuButton/MenuButton";

export const Navbar = () => {
  return (
    <nav>
      <Logo />
      <LoginButton />
      <MenuButton />
    </nav>
  );
};
