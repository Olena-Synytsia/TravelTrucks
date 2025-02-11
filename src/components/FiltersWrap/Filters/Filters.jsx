import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipmentFilter from "../VehicleEquipmentFilter/VehicleEquipmentFilter.jsx";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter.jsx";

import s from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={s.container}>
      <LocationFilter />
      <p className={s.text}>Filters</p>
      <VehicleEquipmentFilter />
      <VehicleTypeFilter />
      <button type="button">Search</button>
    </div>
  );
};

export default Filters;
