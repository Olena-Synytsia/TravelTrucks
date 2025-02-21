import { useNavigate } from "react-router-dom";
import s from "./HomePage.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={s.background}>
      <div className="section">
        <div className={s.container}>
          <h1 className={s.title}>Campers of your dreams</h1>
          <p className={s.text}>
            You can find everything you want in our catalog
          </p>
          <button
            type="button"
            className={s.homePageBtn}
            onClick={handleClick}
            aria-label="View Now"
          >
            View Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
