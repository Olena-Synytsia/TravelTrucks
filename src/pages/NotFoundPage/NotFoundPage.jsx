import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";

import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();

  const stateRef = useRef(location.state);
  const linkGoBack = stateRef.current?.from || "/catalog";

  return (
    <div className="section">
      <div className={s.container}>
        <img src="/img/notfound.png" alt="404 Not Found" width={900} />
        <div className={s.box}>
          <div className={s.text}>Not Found</div>
          <Link to={linkGoBack} className={s.link_back}>
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
