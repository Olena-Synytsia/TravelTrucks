import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperCardById } from "../../../../../redux/campers/operations.js";
import iconsCreateData from "../../../../iconsCreateData/iconsCreateData.jsx";
import s from "./IconWrap.module.css";

const IconWrap = ({ camper }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperCardById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <ul className={s.featuresIconWrap}>
        {Object.keys(iconsCreateData).map((featureKey) => {
          const { icon: Icon, label, condition } = iconsCreateData[featureKey];

          if (!condition(camper)) {
            return null;
          }

          return (
            <li key={featureKey} className={s.featuresIcon}>
              <Icon className={s.icon} />
              <span className={s.title}>{label}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default IconWrap;
