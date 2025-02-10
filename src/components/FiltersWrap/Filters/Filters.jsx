import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipmentFilter from "../VehicleEquipmentFilter/VehicleEquipmentFilter.jsx";
import VehicleTypeWrap from "../VehicleTypeWrap/VehicleTypeWrap.jsx";

import s from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={s.container}>
      <LocationFilter />
      <p className={s.text}>Filters</p>
      <VehicleEquipmentFilter />
      <VehicleTypeWrap />
      <button type="button">Search</button>
    </div>
  );
};

export default Filters;
