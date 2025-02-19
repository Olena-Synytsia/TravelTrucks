import { BsSuitHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setShowFavoritesOnly } from "../../../redux/campers/slice.js";
import { selectShowFavoritesOnly } from "../../../redux/campers/selectors.js";

import s from "./FavoriteCampers.module.css";

const FavoriteCampers = () => {
  const showFavoritesOnly = useSelector(selectShowFavoritesOnly);
  const dispatch = useDispatch();

  const handleFavoriteChange = (event) => {
    dispatch(setShowFavoritesOnly(event.target.checked));
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Favorite campers</h2>
      <label className={s.favoriteLabel}>
        <input
          type="checkbox"
          checked={showFavoritesOnly}
          onChange={handleFavoriteChange}
          className={s.hiddenCheckbox}
        />
        <BsSuitHeart
          className={`${s.icon} ${showFavoritesOnly ? s.checked : ""}`}
        />
      </label>
    </div>
  );
};

export default FavoriteCampers;
