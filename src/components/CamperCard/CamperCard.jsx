import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IoMapOutline } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";
import { fetchCamperCardById } from "../../redux/campers/operations.js";
import Loader from "../../components/Loader/Loader.jsx";
import s from "./CamperCard.module.css";

const CamperCard = ({ camperId }) => {
  const dispatch = useDispatch();

  const camper = useSelector((state) => state.campers.camper);
  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    dispatch(fetchCamperCardById(camperId));
  }, [dispatch, camperId]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className={s.container}>
      {camper && (
        <div key={camper.id}>
          <div className={s.camperCardEl}>
            <h3 className={s.camperName}>{camper.name}</h3>
            <div className={s.camperCardEl2}>
              <p className={s.camperRating}>
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
              </p>
              <p className={s.camperLocation}>
                <IoMapOutline className={s.iconLocation} />
                {camper.location ? (
                  <>
                    {camper.location.split(",")[1]},
                    {camper.location.split(",")[0]}
                  </>
                ) : (
                  "Location not available"
                )}
              </p>
            </div>

            <p className={s.camperPrice}>&euro; {camper.price}.00 </p>
          </div>
          {camper.gallery && camper.gallery.length > 0 && (
            <div className={s.galleryContainer}>
              {camper.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image.thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className={s.thumbnail}
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
