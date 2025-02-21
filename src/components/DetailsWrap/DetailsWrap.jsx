import {
  useParams,
  NavLink,
  useLocation,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/campers/selectors.js";
import CamperCard from "./CamperCard/CamperCard.jsx";
import BookingForm from "./BookingForm/BookingForm.jsx";
import s from "./DetailsWrap.module.css";

const DetailsWrap = () => {
  const { id } = useParams();
  const location = useLocation();
  const error = useSelector(selectError);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (error) {
      navigate("/404", { replace: true });
    }
  }, [error, navigate]);

  return (
    <div className={s.container}>
      <CamperCard camperId={id} onLoad={handleCamperCardLoad} />
      <div className={s.title}>
        <NavLink
          aria-label="Features"
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
          aria-label="Reviews"
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
        {isCamperCardLoaded && (
          <>
            <div>{isCamperCardLoaded && <Outlet />}</div>
            <BookingForm className={s.bookingForm} />
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsWrap;
