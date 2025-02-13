import { BsFillStarFill, BsSuitHeart } from "react-icons/bs";
import { IoMapOutline } from "react-icons/io5";
import s from "./CamperInfo.module.css";

const CamperInfo = ({ camper, handleFavoriteClick, selectedCampers }) => {
  return (
    <>
      <div className={s.camperInfoWrapOne}>
        <h3 className={s.camperName}>{camper.name}</h3>
        <ul className={s.camperInfoPrice}>
          <li className={s.camperPrice}>&euro; {camper.price.toFixed(2)}</li>
          <li>
            <span
              className={s.iconHeart}
              onClick={() => handleFavoriteClick(camper.id)}
            >
              {selectedCampers[camper.id] ? (
                <BsSuitHeart
                  style={{
                    fill: "#E44848",
                    width: "26px",
                    height: "24px",
                  }}
                />
              ) : (
                <BsSuitHeart
                  style={{
                    fill: "#101828",
                    width: "26px",
                    height: "24px",
                  }}
                />
              )}
            </span>
          </li>
        </ul>
      </div>

      <ul className={s.campersInfoWrapTwo}>
        <li className={s.camperRating}>
          <BsFillStarFill
            style={{
              fill: camper.rating > 0 ? "#ffc531" : "#f2f4f7",
            }}
          />
          {camper.rating > 0 ? camper.rating : "No rating"}
          <span>
            <span className={s.text}> ({camper.reviews.length} Reviews)</span>
          </span>
        </li>
        <li className={s.camperRating}>
          <IoMapOutline className={s.iconLocation} />
          {camper.location ? (
            <>
              {camper.location.split(",")[1]},{camper.location.split(",")[0]}
            </>
          ) : (
            "Location not available"
          )}
        </li>
      </ul>
    </>
  );
};

export default CamperInfo;
