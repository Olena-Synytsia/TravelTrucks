import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import CamperCard from "./CamperCard/CamperCard.jsx";
import BookingForm from "./BookingForm/BookingForm.jsx";
import s from "./DetailsWrap.module.css";

const DetailsWrap = () => {
  const { id } = useParams();
  const [isCamperCardLoaded, setIsCamperCardLoaded] = useState(false);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const handleCamperCardLoad = () => {
    setIsCamperCardLoaded(true);
  };

  return (
    <div className="section">
      <CamperCard camperId={id} onLoad={handleCamperCardLoad} />
      <div className={s.title}>
        <NavLink to={`/catalog/${id}/features`} className={buildLinkClass}>
          Features
        </NavLink>
        <NavLink to={`/catalog/${id}/reviews`} className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>

      <hr className={s.hr} />

      <div className={s.infoWrap}>
        <div>{isCamperCardLoaded && <Outlet />}</div>
        <BookingForm className={s.bookingForm} />
      </div>
    </div>
  );
};

export default DetailsWrap;
