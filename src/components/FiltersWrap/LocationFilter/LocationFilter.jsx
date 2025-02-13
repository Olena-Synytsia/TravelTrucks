import { IoMapOutline } from "react-icons/io5";
import s from "./LocationFilter.module.css";

const LocationFilter = ({ location, setLocation }) => {
  const handleLocationChange = (event) => {
    setLocation(event.target.value); 
  };

  return (
    <div className={s.container}>
      <label className={s.label}>Location</label>
      <div className={s.inputWrap}>
        <IoMapOutline className={s.icon} />

        <input
          type="text"
          className={s.input}
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
      </div>
    </div>
  );
};

export default LocationFilter;
