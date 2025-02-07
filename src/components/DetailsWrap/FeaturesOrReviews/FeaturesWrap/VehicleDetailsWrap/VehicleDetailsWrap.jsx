import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperCardById } from "../../../../../redux/campers/operations.js";
import {
  selectLoading,
  selectError,
} from "../../../../../redux/campers/selectors.js";
import Loader from "../../../../Loader/Loader.jsx";
import s from "./VehicleDetailsWrap.module.css";

const VehicleDetailsWrap = ({ camper }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperCardById(id));
    }
  }, [dispatch, id]);

  // Якщо дані ще не завантажені
  if (loading) return <Loader />;

  // Якщо сталася помилка
  if (error) return <div>Error: {error}</div>;

  // Якщо camper ще не завантажено (значення undefined)
  if (!camper) return <div>Camper not found</div>;

  const capitalizeWords = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .replace(/^./, (char) => char.toUpperCase())
      .replace(/([0-9])([a-zA-Z])/g, "$1 $2");
  };

  return (
    <>
      <h3 className={s.title}>VehicleDetailsWrap</h3>
      <ul className={s.vehicleDetail}>
        <li className={s.vehicleDetailLi}>
          <p className={s.text}>
            Form<span>{capitalizeWords(camper.form)}</span>
          </p>
        </li>

        <li className={s.vehicleDetailLi}>
          <p className={s.text}>
            Length<span>{capitalizeWords(camper.length)}</span>
          </p>
        </li>

        <li className={s.vehicleDetailLi}>
          <p className={s.text}>
            Width<span>{capitalizeWords(camper.width)}</span>
          </p>
        </li>

        <li className={s.vehicleDetailLi}>
          <p className={s.text}>
            Height<span>{capitalizeWords(camper.height)}</span>
          </p>
        </li>

        <li className={s.vehicleDetailLi}>
          <p className={s.text}>
            Tank<span>{capitalizeWords(camper.tank)}</span>
          </p>
        </li>

        <li className={s.vehicleDetailLi}>
          <p className={s.text}>
            Consumption<span>{capitalizeWords(camper.consumption)}</span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetailsWrap;
