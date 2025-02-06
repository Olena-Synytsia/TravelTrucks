import CamperList from "./CampersList/CampersList.jsx";

import Filters from "../FiltersWrap/Filters/Filters.jsx";
import s from "./CatalogWrap.module.css";

const CatalogPage = () => {
  return (
    <div className={s.container}>
      <Filters />
      <CamperList />
    </div>
  );
};

export default CatalogPage;
