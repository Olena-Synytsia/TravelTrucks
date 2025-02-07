import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IconWrap from "./IconWrap/IconWrap.jsx";
import VehicleDetailsWrap from "./VehicleDetailsWrap/VehicleDetailsWrap.jsx";
import s from "./FeaturesWrap.module.css";

const FeaturesWrap = () => {
  const { id } = useParams();

  const camper = useSelector((state) =>
    state.campers.camper && state.campers.camper.id === id
      ? state.campers.camper
      : null
  );

  if (!camper) return <div>Camper not found or loading...</div>;

  return (
    <div className={s.container}>
      <IconWrap camper={camper} />

      <VehicleDetailsWrap camper={camper} />
    </div>
  );
};
export default FeaturesWrap;
