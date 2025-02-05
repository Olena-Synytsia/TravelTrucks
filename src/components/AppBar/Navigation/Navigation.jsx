import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  const isDetailsPage = location.pathname.includes("/details");

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && !isDetailsPage && s.activeLink);
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
