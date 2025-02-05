import CamperCard from "../CamperCard/CamperCard.jsx";
import { useParams } from "react-router-dom";

const CamperDetails = () => {
  const { id } = useParams(); // отримуємо id з URL
  return (
    <div className="section">
      <CamperCard camperId={id} />
    </div>
  );
};

export default CamperDetails;
