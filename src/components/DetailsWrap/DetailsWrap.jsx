import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CamperCard from "./CamperCard/CamperCard.jsx";
import clsx from "clsx";
import ReviewsWrapper from "../DetailsWrap/FeaturesOrReviews/ReviewsWrap/ReviewsWrap.jsx";
import FeaturesWrap from "../DetailsWrap/FeaturesOrReviews/FeaturesWrap/FeaturesWrap.jsx";
import BookingForm from "./BookingForm/BookingForm.jsx";

import s from "./DetailsWrap.module.css";

const DetailsWrap = () => {
  const { id, tab } = useParams();
  const navigate = useNavigate();

  const camper = useSelector((state) =>
    state.campers.camper && state.campers.camper.id === id
      ? state.campers.camper
      : null
  );

  useEffect(() => {
    if (!tab) {
      navigate(`/catalog/${id}/features`, { replace: true }); // Автоматичний редирект на features
    }
  }, [id, tab, navigate]);

  const [activeTab, setActiveTab] = useState(tab || "features");

  useEffect(() => {
    if (tab) {
      setActiveTab(tab); // Якщо в URL є параметр tab, оновлюємо activeTab
    }
  }, [tab]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <div className="section">
      <CamperCard camperId={id} />
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
        <div>
          {activeTab === "features" && (
            <FeaturesWrap className={s.featuresContainer} camper={camper} />
          )}
          {activeTab === "reviews" && camper && (
            <ReviewsWrapper
              reviews={camper.reviews}
              className={s.reviewsContainer}
              camper={camper}
            />
          )}
        </div>
        <BookingForm className={s.bookingForm} />
      </div>
    </div>
  );
};

export default DetailsWrap;
