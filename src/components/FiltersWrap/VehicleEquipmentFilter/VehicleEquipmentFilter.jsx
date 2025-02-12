// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectFilters } from "../../../redux/campers/selectors.js";
// import { setFilters } from "../../../redux/campers/slice.js";
import iconsCreateData from "../../iconsCreateData/iconsCreateData.jsx";
import s from "./VehicleEquipmentFilter.module.css";

const VehicleEquipmentFilter = ({ activeFilters, setActiveFilters }) => {
  // const dispatch = useDispatch();
  // const filters = useSelector(selectFilters);
  // const [activeFilters, setActiveFilters] = useState([]);

  // Оновлення глобальних фільтрів у Redux тільки після зміни activeFilters
  // useEffect(() => {
  //   if (activeFilters.length > 0 || filters.length > 0) {
  //     dispatch(
  //       setFilters({
  //         ...activeFilters.reduce((acc, filter) => {
  //           // Додаємо фільтри для AC, Kitchen, Bathroom, TV і т. д.
  //
  //         }, {}),
  //       })
  //     );
  //   }
  // }, [activeFilters, dispatch, filters.length]);

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
