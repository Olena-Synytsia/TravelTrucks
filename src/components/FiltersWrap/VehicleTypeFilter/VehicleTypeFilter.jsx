import { BsGrid } from "react-icons/bs";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import s from "./VehicleTypeFilter.module.css";

const VehicleTypeFilter = () => {
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
        {formLabels.map((item, index) => (
          <li key={index} className={s.iconWrap}>
            <span className={s.icon}>{item.icon}</span>
            <span className={s.label}>{labelReplacement[item.label]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleTypeFilter;
