import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipmentFilterWrap from "../VehicleEquipmentFilterWrap/VehicleEquipmentFilterWrap.jsx";
import VehicleTypeWrap from "../VehicleTypeWrap/VehicleTypeWrap.jsx";

import s from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={s.container}>
      <LocationFilter />
      <VehicleEquipmentFilterWrap />
      <VehicleTypeWrap />
      <button type="button">Search</button>
    </div>
  );
};

export default Filters;
