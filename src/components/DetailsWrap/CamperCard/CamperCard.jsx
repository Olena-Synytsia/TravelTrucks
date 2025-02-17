import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCamperCardById } from "../../../redux/campers/operations.js";
import { selectCamper, selectError } from "../../../redux/campers/selectors.js";
import { BsFillStarFill } from "react-icons/bs";
import { IoMapOutline } from "react-icons/io5";
import s from "./CamperCard.module.css";

const CamperCard = ({ camperId, onLoad }) => {
  const dispatch = useDispatch();

  const camper = useSelector(selectCamper);
  const error = useSelector(selectError);

  useEffect(() => {
    onLoad();
  }, [camperId, onLoad]);

  useEffect(() => {
    if (!camperId) {
      return;
    }
    dispatch(fetchCamperCardById(camperId));
  }, [dispatch, camperId]);

  if (error) return <div>{error}</div>;
  if (!camper) return <div>No camper data available.</div>;

  return (
    <div className={s.container}>
      {camper && (
        <div key={camper.id}>
          <div className={s.camperInfoWrapOne}>
            <h3 className={s.camperName}>{camper.name}</h3>
            <ul className={s.campersInfoWrapTwo}>
              <li className={s.camperRating}>
                <BsFillStarFill
                  style={{
                    fill: camper.rating > 0 ? "#ffc531" : "#f2f4f7",
                    paddingRight: "4px",
                  }}
                />
                {camper.rating > 0 ? camper.rating : "No rating"}
                <span>
                  <span> ({camper.reviews.length} Reviews)</span>
                </span>
              </li>
              <li className={s.camperLocation}>
                <IoMapOutline className={s.iconLocation} />
                {camper.location ? (
                  <>
                    {camper.location.split(",")[1]},
                    {camper.location.split(",")[0]}
                  </>
                ) : (
                  "Location not available"
                )}
              </li>
            </ul>

            <p className={s.camperPrice}>&euro; {camper.price.toFixed(2)}</p>
          </div>
          {camper.gallery && camper.gallery.length > 0 && (
            <div className={s.galleryContainer}>
              {camper.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image.thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className={s.gallery}
                />
              ))}
            </div>
          )}

          <p className={s.camperDescription}>{camper.description}</p>
        </div>
      )}
    </div>
  );
};

export default CamperCard;
