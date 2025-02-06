import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  const isDetailsPage = location.pathname.includes("/catalog/");

  const buildLinkClass = ({ isActive }) => {
    if (isDetailsPage) {
      return s.link;
    }
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <div className={s.navigation}>
      <NavLink className={buildLinkClass} to="/">
        Nome
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </div>
  );
};

export default Navigation;
