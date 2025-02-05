import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMapOutline } from "react-icons/io5";
import { BsFillStarFill, BsSuitHeart } from "react-icons/bs";
import { fetchCampers } from "../../redux/campers/operations.js";
import { toggleFavorite, setHasMore } from "../../redux/campers/slice.js"; // import setHasMore
import Loader from "../../components/Loader/Loader.jsx";
import s from "./CampersList.module.css";
import iconsCreateData from "../iconsCreateData/iconsCreateData.jsx";
import {
  selectCampers,
  selectSelectedCampers,
  selectLoading,
  selectError,
  selectHasMore, // Додано вибір для hasMore
} from "../../redux/campers/selectors.js";
import { useNavigate } from "react-router-dom";

const CamperList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const campers = useSelector(selectCampers);
  const selectedCampers = useSelector(selectSelectedCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore); // Використовуємо глобальний hasMore з Redux

  const [currentItems, setCurrentItems] = useState([]);
  const [itemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("Dispatching fetchCampers...");
    dispatch(fetchCampers({ page: currentPage, itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  useEffect(() => {
    if (campers && campers.length > 0) {
      setCurrentItems((prevItems) => {
        // Перевірка, щоб не додавати дублікати
        const newItems = campers.filter(
          (camper) => !prevItems.some((item) => item.id === camper.id)
        );
        return [...prevItems, ...newItems];
      });

      // Оновлюємо hasMore після отримання нових даних
      if (campers.length < itemsPerPage) {
        dispatch(setHasMore(false)); // Оновлюємо глобальний стан hasMore в Redux
      }
    }
  }, [campers, itemsPerPage, dispatch]);

  const loadMoreItems = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
      // Замість setCurrentItems, використовуємо dispatch для додавання нових кемперів
      dispatch(fetchCampers({ page: currentPage + 1, itemsPerPage }));
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
    navigate(`/catalog/${camper.id}`);
  };

  const renderIcons = (camper) => {
    const filteredKeys = ["transmission", "engine", "kitchen", "AC"];
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
      {currentItems.map((camper, index) => (
        <div key={`${camper.id}-${index}`} className={s.camperListCard}>
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
