import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../redux/campers/slice.js";
import { selectFilters } from "../../../redux/campers/selectors.js";
import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipmentFilter from "../VehicleEquipmentFilter/VehicleEquipmentFilter.jsx";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter.jsx";

import s from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  // Функція для оновлення фільтрів у Redux
  const handleSearchClick = () => {
    dispatch(setFilters(filters));
  };

  return (
    <div className={s.container}>
      <LocationFilter />
      <p className={s.text}>Filters</p>
      <VehicleEquipmentFilter />
      <VehicleTypeFilter />
      <button type="button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default Filters;
