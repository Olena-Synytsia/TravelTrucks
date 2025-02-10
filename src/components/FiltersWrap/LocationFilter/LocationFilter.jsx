import { IoMapOutline } from "react-icons/io5";
import s from "./LocationFilter.module.css";

const LocationFilter = () => {
  return (
    <div className={s.container}>
      <label className={s.label}>Location</label>
      <div className={s.inputWrap}>
        <IoMapOutline className={s.icon} />

        <input
          type="text"
          className={s.input}
          // onChange={handleChange}
          placeholder="Enter location"
          // value={location}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
