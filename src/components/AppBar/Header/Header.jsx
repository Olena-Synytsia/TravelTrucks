import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.headerWrap}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
