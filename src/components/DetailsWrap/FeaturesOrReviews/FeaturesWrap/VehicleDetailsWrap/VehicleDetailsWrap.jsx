import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperCardById } from "../../../../../redux/campers/operations.js";

import s from "./VehicleDetailsWrap.module.css";

const VehicleDetailsWrap = ({ camper }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperCardById(id));
    }
  }, [dispatch, id]);

  const capitalizeWords = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .replace(/^./, (char) => char.toUpperCase())
      .replace(/([0-9])([a-zA-Z])/g, "$1 $2");
  };

  return (
    <>
      <h3 className={s.title}>Vehicle details</h3>
      <hr className={s.hr} />
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
