import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCampers } from "../../../redux/campers/operations.js";
import {
  resetCampers,
  toggleFavorite,
  setHasMore,
  setPage,
} from "../../../redux/campers/slice.js";
import {
  selectCampers,
  selectSelectedCampers,
  selectLoading,
  selectError,
  selectHasMore,
  selectFilters,
  selectCurrentPage,
  selectItemsPerPage,
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
  const hasMore = useSelector(selectHasMore);
  const filters = useSelector(selectFilters);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const loadMoreBtnRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    dispatch(resetCampers());
  }, [dispatch, filters]);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(setPage(1));
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch, filters]);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchCampers({ page: currentPage, itemsPerPage, filters }));
    }
  }, [dispatch, currentPage, itemsPerPage, filters]);

  useEffect(() => {
    if (campers && campers.length > 0) {
      if (campers.length < itemsPerPage) {
        dispatch(setHasMore(false));
      }
    }
  }, [campers, itemsPerPage, dispatch]);

  const loadMoreItems = () => {
    if (hasMore) {
      const currentScrollPosition = window.scrollY;
      scrollPositionRef.current = currentScrollPosition;

      const nextPage = currentPage + 1;
      dispatch(fetchCampers({ page: nextPage, limit: itemsPerPage, filters }));
      dispatch(setPage(nextPage));
    }
  };

  useEffect(() => {
    if (scrollPositionRef.current !== 0) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [campers]);

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
  if (error) return <div>Error: {error}</div>;

  const handleFavoriteClick = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleClick = (camper) => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <div className={s.container}>
      {campers.map((camper, index) => (
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
        <button
          ref={loadMoreBtnRef}
          className={s.loadMoreBtn}
          onClick={loadMoreItems}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CamperList;
