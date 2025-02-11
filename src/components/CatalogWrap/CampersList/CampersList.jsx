import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCampers } from "../../../redux/campers/operations.js";
import { toggleFavorite, setHasMore } from "../../../redux/campers/slice.js";
import {
  selectCampers,
  selectSelectedCampers,
  selectLoading,
  selectError,
  selectHasMore,
  selectFilters,
} from "../../../redux/campers/selectors.js";
import Loader from "../../Loader/Loader.jsx";
import CamperInfo from "../CamperInfo/CamperInfo.jsx";
import iconsCreateData from "../../iconsCreateData/iconsCreateData.jsx";
import s from "./CampersList.module.css";

const CamperList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const campers = useSelector(selectCampers);
  const selectedCampers = useSelector(selectSelectedCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore); // Використовуємо глобальний hasMore з Redux
  const filters = useSelector(selectFilters); // Отримуємо фільтри з Redux

  const [currentItems, setCurrentItems] = useState([]);
  const [itemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCampers({ page: currentPage, itemsPerPage, filters }));
  }, [dispatch, currentPage, itemsPerPage, filters]);

  useEffect(() => {
    if (campers && campers.length > 0) {
      setCurrentItems((prevItems) => {
        const newItems = campers.filter(
          (camper) => !prevItems.some((item) => item.id === camper.id)
        );
        return [...prevItems, ...newItems];
      });

      if (campers.length < itemsPerPage) {
        dispatch(setHasMore(false)); // Оновлюємо глобальний стан hasMore в Redux
      }
    }
  }, [campers, itemsPerPage, dispatch]);

  const loadMoreItems = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const renderIcons = (camper) => {
    const filteredKeys = ["transmission", "engine", "kitchen", "AC"];
    return filteredKeys.map((key) => {
      const { icon: Icon, label, condition } = iconsCreateData[key];

      if (condition(camper)) {
        return (
          <li key={label} className={s.iconContainer}>
            <Icon className={s.icon} />
            <span className={s.iconLabel}>{label}</span>
          </li>
        );
      }
      return null;
    });
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
            <CamperInfo
              camper={camper}
              handleFavoriteClick={handleFavoriteClick}
              selectedCampers={selectedCampers}
            />
            <p className={s.camperDescription}>{camper.description}</p>
            <ul className={s.iconContainerWrap}>{renderIcons(camper)}</ul>

            <button
              type="button"
              className={s.camperListBtn}
              onClick={() => handleClick(camper)}
            >
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
