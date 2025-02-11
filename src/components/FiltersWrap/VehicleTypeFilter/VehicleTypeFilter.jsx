import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../redux/campers/slice.js";
import { selectFilters } from "../../../redux/campers/selectors.js";
import { BsGrid, BsGrid3X3Gap, BsGrid1X2 } from "react-icons/bs";
import s from "./VehicleTypeFilter.module.css";

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectFilters);

  // Обробник зміни типу транспортного засобу
  const handleVehicleTypeChange = (type) => {
    dispatch(
      setFilters({
        ...form, // Отримуємо всі фільтри
        form: type, // Оновлюємо тільки form
      })
    );
  };

  const formLabels = [
    { label: "panelTruck", icon: <BsGrid1X2 /> },
    { label: "fullyIntegrated", icon: <BsGrid /> },
    { label: "alcove", icon: <BsGrid3X3Gap /> },
  ];

  const labelReplacement = {
    panelTruck: "Van", // Заміна "panelTruck" на "Van"
    fullyIntegrated: "Fully integrated", // "Fully integrated"
    alcove: "Alcove", // "Alcove"
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>Vehicle type</h3>
      <hr className={s.hr} />
      <ul className={s.iconList}>
        {formLabels.map((item) => (
          <li
            key={item.label}
            className={s.iconWrap}
            onClick={() => handleVehicleTypeChange(item.label)}
          >
            <span className={s.icon}>{item.icon}</span>
            <span className={s.label}>{labelReplacement[item.label]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleTypeFilter;
