import s from "./LocationFilter.module.css";

const LocationFilter = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>Location</div>
      <div>Location filter input</div>
    </div>
  );
};

export default LocationFilter;
