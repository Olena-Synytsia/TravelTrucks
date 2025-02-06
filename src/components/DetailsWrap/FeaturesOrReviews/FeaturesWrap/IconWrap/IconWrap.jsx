import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperCardById } from "../../../../../redux/campers/operations.js";
import { useParams } from "react-router-dom";
import {
  selectLoading,
  selectError,
} from "../../../../../redux/campers/selectors.js";
import iconsCreateData from "../../../../iconsCreateData/iconsCreateData.jsx";
import s from "./IconWrap.module.css";

const IconWrap = ({ camper }) => {
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
    <ul className={s.featuresIconWrap}>
      {Object.keys(iconsCreateData).map((featureKey) => {
        const { icon: Icon, label, condition } = iconsCreateData[featureKey];

        // Перевірка умови для цієї особливості
        if (!condition(camper)) {
          return null; // Якщо умова не виконується, не рендеримо іконку
        }

        return (
          <li key={featureKey} className={s.featuresIcon}>
            <Icon className={s.icon} />
            {/* Рендеримо іконку */}
            <span className={s.title}>{capitalizeWords(label)}</span>
            {/* Виводимо текст для цієї іконки */}
          </li>
        );
      })}
    </ul>
  );
};

export default IconWrap;
