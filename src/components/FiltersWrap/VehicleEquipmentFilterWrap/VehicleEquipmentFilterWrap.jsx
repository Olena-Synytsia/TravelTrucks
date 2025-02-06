import VehicleEquipmentFilter from "../VehicleEquipmentFilter/VehicleEquipmentFilter.jsx";

import s from "./VehicleEquipmentFilterWrap.module.css";

const VehicleEquipmentFilterWrap = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>Filters</p>
      <VehicleEquipmentFilter />
    </div>
  );
};

export default VehicleEquipmentFilterWrap;
