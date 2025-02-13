import iconsCreateData from "../../iconsCreateData/iconsCreateData.jsx";
import s from "./VehicleEquipmentFilter.module.css";

const VehicleEquipmentFilter = ({ activeFilters, setActiveFilters }) => {
  const toggleFilter = (label) => {
    setActiveFilters((prev) => {
      const newFilters = prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label];

      return newFilters;
    });
  };

  const filterOrder = ["AC", "transmission", "kitchen", "TV", "bathroom"];

  return (
    <div className={s.container}>
      <h3 className={s.title}>Vehicle equipment</h3>
      <hr className={s.hr} />
      <ul className={s.iconList}>
        {filterOrder.map((filterKey) => {
          const { icon: Icon, label } = iconsCreateData[filterKey];
          const isActive = activeFilters.includes(label);

          return (
            <li
              key={label}
              onClick={() => toggleFilter(label)}
              className={isActive ? `${s.iconWrap} ${s.active}` : s.iconWrap}
            >
              <Icon className={s.icon} />
              <span className={s.label}>{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VehicleEquipmentFilter;
