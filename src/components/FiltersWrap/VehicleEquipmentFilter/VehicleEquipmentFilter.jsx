import iconsCreateData from "../../iconsCreateData/iconsCreateData.jsx";
import s from "./VehicleEquipmentFilter.module.css";

const VehicleEquipmentFilter = () => {
  const renderIcons = () => {
    // Оголошуємо необхідні ключі для відображення
    const filteredKeys = ["AC", "transmission", "kitchen", "TV", "bathroom"];
    // Ось тут просто беремо необхідні ключі з iconsCreateData
    return filteredKeys.map((key) => {
      const { icon: Icon, label } = iconsCreateData[key];

      // Рендеримо тільки іконки з цього списку
      return (
        <li key={key} className={s.iconWrap}>
          <Icon className={s.icon} />
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
