import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter.jsx";

import s from "./VehicleTypeWrap.module.css";

const VehicleTypeWrap = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>Vehicle type</p>
      <VehicleTypeFilter />
    </div>
  );
};

export default VehicleTypeWrap;
