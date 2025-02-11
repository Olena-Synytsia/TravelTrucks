import { useDispatch, useSelector } from "react-redux";
import { IoMapOutline } from "react-icons/io5";
import { setFilters } from "../../../redux/campers/slice.js";
import { selectLocation } from "../../../redux/campers/selectors.js";

import s from "./LocationFilter.module.css";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const handleLocationChange = (event) => {
    dispatch(
      setFilters({
        location: event.target.value, // оновлюємо лише location
      })
    );
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
