import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetCampers, setIsFirstVisit } from "../../redux/campers/slice.js";

import { selectIsFirstVisit } from "../../redux/campers/selectors.js";

import CamperList from "./CampersList/CampersList.jsx";

import Filters from "../FiltersWrap/Filters/Filters.jsx";
import s from "./CatalogWrap.module.css";

const CatalogWrap = () => {
  const dispatch = useDispatch();
  const isFirstVisit = useSelector(selectIsFirstVisit);

  useEffect(() => {
    if (isFirstVisit) {
      dispatch(resetCampers());
      dispatch(setIsFirstVisit(false));
    }
  }, [dispatch, isFirstVisit]);

  return (
    <div className={s.container}>
      <Filters />
      <CamperList />
    </div>
  );
};

export default CatalogWrap;
