import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import CamperCard from "./CamperCard/CamperCard.jsx";
import ReviewsWrapper from "../DetailsWrap/FeaturesOrReviews/ReviewsWrap/ReviewsWrap.jsx";
import FeaturesWrap from "../DetailsWrap/FeaturesOrReviews/FeaturesWrap/FeaturesWrap.jsx";
import BookingForm from "./BookingForm/BookingForm.jsx";

import s from "./DetailsWrap.module.css";

const DetailsWrap = () => {
  const { id } = useParams(); // отримуємо id з URL
  const navigate = useNavigate();

  const camper = useSelector((state) =>
    state.campers.camper && state.campers.camper.id === id
      ? state.campers.camper
      : null
  );

  const [activeTab, setActiveTab] = useState("features");

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    navigate(`?tab=${tab}`);
  };

  return (
    <div className="section">
      <CamperCard camperId={id} />
      <div className={s.title}>
        <div
          onClick={() => handleTabClick("features")}
          className={activeTab === "features" ? s.active : ""}
        >
          Features
        </div>
        <div
          onClick={() => handleTabClick("reviews")}
          className={activeTab === "reviews" ? s.active : ""}
        >
          Reviews
        </div>
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
        <BookingForm />
      </div>
    </div>
  );
};

export default DetailsWrap;
