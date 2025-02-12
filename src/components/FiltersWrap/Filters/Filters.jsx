import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/campers/slice.js";
// import { selectFilters } from "../../../redux/campers/selectors.js";
import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipmentFilter from "../VehicleEquipmentFilter/VehicleEquipmentFilter.jsx";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter.jsx";

import s from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  // const filters = useSelector(selectFilters);

  // Локальні стани для фільтрів
  const [location, setLocation] = useState("");
  const [vehicleEquipment, setVehicleEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState("");

  const handleSearchClick = () => {
    // Перетворюємо локальні фільтри в потрібний формат для глобального стану
    const filters = {
      location, // Місце
      form: vehicleType || "", // Замість vehicleType передаємо form (це значення буде зберігатись в бд як form)
      transmission: vehicleEquipment.includes("Automatic") ? "automatic" : "",
      AC: vehicleEquipment.includes("AC"),
      bathroom: vehicleEquipment.includes("Bathroom"),
      kitchen: vehicleEquipment.includes("Kitchen"),
      TV: vehicleEquipment.includes("TV"),
    };

    // Відправляємо фільтри у Redux
    dispatch(setFilters({ filters }));
  };

  return (
    <div className={s.container}>
      <LocationFilter location={location} setLocation={setLocation} />
      <p className={s.text}>Filters</p>
      <VehicleEquipmentFilter
        activeFilters={vehicleEquipment}
        setActiveFilters={setVehicleEquipment}
      />
      <VehicleTypeFilter
        vehicleType={vehicleType}
        setVehicleType={setVehicleType}
      />
      <button type="button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default Filters;
