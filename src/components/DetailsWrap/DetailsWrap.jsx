import { useParams, NavLink, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import CamperCard from "./CamperCard/CamperCard.jsx";
import BookingForm from "./BookingForm/BookingForm.jsx";
import s from "./DetailsWrap.module.css";

const DetailsWrap = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isCamperCardLoaded, setIsCamperCardLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    if (location.pathname.includes("reviews")) {
      setActiveTab("reviews");
    } else {
      setActiveTab("features");
    }
  }, [location.pathname]);

  const handleCamperCardLoad = () => {
    setIsCamperCardLoaded(true);
  };

  return (
    <div className="section">
      <CamperCard camperId={id} onLoad={handleCamperCardLoad} />
      <div className={s.title}>
        <NavLink
          to={`/catalog/${id}/features`}
          className={({ isActive }) =>
            `${s.link} ${
              isActive || activeTab === "features" ? s.activeLink : ""
            }`
          }
        >
          Features
        </NavLink>
        <NavLink
          to={`/catalog/${id}/reviews`}
          className={({ isActive }) =>
            `${s.link} ${
              isActive || activeTab === "reviews" ? s.activeLink : ""
            }`
          }
        >
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
