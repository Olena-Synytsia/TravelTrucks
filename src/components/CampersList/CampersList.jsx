import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMapOutline } from "react-icons/io5";
import { BsFillStarFill, BsSuitHeart } from "react-icons/bs";
import { fetchCampers } from "../../redux/campers/operations.js";
import { toggleFavorite } from "../../redux/campers/slice.js";
import Loader from "../../components/Loader/Loader.jsx";
import s from "./CampersList.module.css";
import iconsCreateData from "../iconsCreateData/iconsCreateData.jsx";
import {
  selectCampers,
  selectSelectedCampers,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors.js";

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const selectedCampers = useSelector(selectSelectedCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [currentItems, setCurrentItems] = useState([]);
  const [itemsPerPage] = useState(4);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    console.log("Dispatching fetchCampers...");
    dispatch(fetchCampers({ page: 1, itemsPerPage: 4 }));
  }, [dispatch]);

  useEffect(() => {
    if (campers && campers.length > 0) {
      setCurrentItems(campers.slice(0, itemsPerPage));
    }
  }, [campers, itemsPerPage]);

  const loadMoreItems = () => {
    const nextPage = Math.ceil(currentItems.length / itemsPerPage) + 1;
    const nextItems = campers.slice(0, nextPage * itemsPerPage);
    setCurrentItems(nextItems);
    if (nextItems.length >= campers.length) {
      setHasMore(false);
    }
  };

  if (loading) return <Loader />;

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleFavoriteClick = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleClick = (camper) => {
    window.open(`/catalog/${camper.id}`, "_blank");
  };

  // Рендер іконок з об'єкта iconsCreateData
  const renderIcons = (camper) => {
    // Порядок іконок
    const filteredKeys = ["transmission", "engine", "kitchen", "AC"];

    // Перевіряємо наявність іконок
    return filteredKeys.map((key) => {
      const { icon: Icon, label, condition } = iconsCreateData[key];

      if (condition(camper)) {
        return (
          <div key={label} className={s.iconContainer}>
            <Icon className={s.icon} />
            <span>{label}</span>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className={s.container}>
      {currentItems.map((camper) => (
        <div key={camper.id} className={s.camperListCard}>
          <div className={s.gallery}>
            {camper.gallery && camper.gallery.length > 0 && (
              <img
                src={camper.gallery[0].original}
                alt={camper.name}
                className={s.img}
              />
            )}
          </div>
          <div className={s.campersCardInfo}>
            <div className={s.campersListInfoEl1}>
              <h3 className={s.camperName}>{camper.name}</h3>
              <div className={s.campersListInfoEl2}>
                <p className={s.camperPrice}>&euro; {camper.price}.00 </p>
                <p>
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
                </p>
              </div>
            </div>

            <div className={s.campersListInfoEl3}>
              <div className={s.camperRating}>
                <BsFillStarFill
                  style={{
                    fill: camper.rating > 0 ? "#ffc531" : "#f2f4f7",
                  }}
                />
                {camper.rating > 0 ? camper.rating : "No rating"}
                <span>
                  <span className={s.text}>
                    {" "}
                    ({camper.reviews.length} Reviews)
                  </span>
                </span>
              </div>
              <p className={s.text}>
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

            <p className={s.camperDescription}>{camper.description}</p>

            {/* Рендерим іконки за допомогою renderIcons */}
            <div className={s.iconsContainer}>{renderIcons(camper)}</div>

            <button type="button" onClick={() => handleClick(camper)}>
              Show more
            </button>
          </div>
        </div>
      ))}

      {hasMore && (
        <button className={s.loadMoreBtn} onClick={loadMoreItems}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CamperList;
