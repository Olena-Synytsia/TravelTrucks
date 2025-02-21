import { useState, useEffect } from "react";
import { BiSolidChevronsUp } from "react-icons/bi";
import s from "./ScrollUp.module.css";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollUp}
      aria-label="Scroll Up"
      className={`${s.scrollUpBtn} ${visible ? s.visible : ""}`}
    >
      <BiSolidChevronsUp size={34} />
    </button>
  );
};

export default ScrollUp;
