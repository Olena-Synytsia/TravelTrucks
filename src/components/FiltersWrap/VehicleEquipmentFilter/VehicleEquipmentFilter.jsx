import { useState } from "react";

import iconsCreateData from "../../iconsCreateData/iconsCreateData.jsx";
import s from "./VehicleEquipmentFilter.module.css";

const VehicleEquipmentFilter = ({ onChange, filters }) => {
  const [localFilter, setLocalFilter] = useState(filters);

  // Оновлюємо filter через onChange
  const handleFilterChange = (filterKey) => {
    const updatedFilter = {
      ...localFilter,
      [filterKey]: !localFilter[filterKey],
    };
    setLocalFilter(updatedFilter); // Оновлюємо локальний стан
    onChange(updatedFilter); // Викликаємо onChange з оновленими даними
  };

  const renderIcons = () => {
    // Оголошуємо необхідні ключі для відображення
    const filteredKeys = ["AC", "transmission", "kitchen", "TV", "bathroom"];
    // Ось тут просто беремо необхідні ключі з iconsCreateData
    return filteredKeys.map((key) => {
      const { icon: Icon, label } = iconsCreateData[key];

      // Рендеримо тільки іконки з цього списку
      return (
        <li key={key} className={s.iconWrap}>
          <Icon className={s.icon} onClick={() => handleFilterChange(key)} />
          <span className={s.label}>{label}</span>
        </li>
      );
    });
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>Vehicle equipment</h3>
      <hr className={s.hr} />
      <ul className={s.iconList}>{renderIcons()}</ul>
    </div>
  );
};

export default VehicleEquipmentFilter;
