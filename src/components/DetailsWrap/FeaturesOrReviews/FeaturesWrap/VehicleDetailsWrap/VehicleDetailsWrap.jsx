import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperCardById } from "../../../../../redux/campers/operations.js";
import {
  selectLoading,
  selectError,
} from "../../../../../redux/campers/selectors.js";
import s from "./VehicleDetailsWrap.module.css";

const VehicleDetailsWrap = ({ camper }) => {
  const { id } = useParams();
  console.log("CFMPER", camper);
  console.log(id);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      console.log("FCGBID", id);
      dispatch(fetchCamperCardById(id));
    }
  }, [dispatch, id]);

  // Якщо дані ще не завантажені
  if (loading) return <div>Loading...</div>;

  // Якщо сталася помилка
  if (error) return <div>Error: {error}</div>;

  // Якщо camper ще не завантажено (значення undefined)
  if (!camper) return <div>Camper not found</div>;

  const capitalizeWords = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .replace(/^./, (char) => char.toUpperCase());
  };

  return (
    <div className={s.container}>
      <div>VehicleDetailsWrap</div>
      <ul className={s.vehicleDetail}>
        <li></li>
        {camper.form && <li>{capitalizeWords(`Form ${camper.form}`)}</li>}
        {camper.length && <li>{capitalizeWords(`Length ${camper.length}`)}</li>}
        {camper.width && <li>{capitalizeWords(`Width ${camper.width}`)}</li>}
        {camper.height && <li>{capitalizeWords(`Height ${camper.height}`)}</li>}
        {camper.tank && <li>{capitalizeWords(`Tank ${camper.tank}`)}</li>}
        {camper.consumption && (
          <li>{capitalizeWords(`Consumption ${camper.consumption}`)}</li>
        )}
      </ul>
    </div>
  );
};

export default VehicleDetailsWrap;
