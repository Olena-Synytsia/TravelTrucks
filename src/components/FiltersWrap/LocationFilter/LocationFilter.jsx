import { IoMapOutline } from "react-icons/io5";
import s from "./LocationFilter.module.css";

const LocationFilter = ({ location, setLocation }) => {
  const handleLocationChange = (event) => {
    setLocation(event.target.value); // Локально оновлюємо стан
  };

  return (
    <div className={s.container}>
      <label className={s.label}>Location</label>
      <div className={s.inputWrap}>
        <IoMapOutline className={s.icon} />

        <input
          type="text"
          className={s.input}
          value={location} // щоб значення input було прив'язане до стану
          onChange={handleLocationChange} // використовуємо правильний обробник
          placeholder="Enter location"
        />
      </div>
    </div>
  );
};

export default LocationFilter;
