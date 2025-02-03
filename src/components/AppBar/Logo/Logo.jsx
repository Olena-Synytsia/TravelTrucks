import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={s.logoWrap}>
      <a className={s.logo} href="/">
        <img
          src="/Logo.svg"
          alt="logo"
          className={s.logoIcon}
          width="136"
          height="16"
        />
      </a>
    </div>
  );
};

export default Logo;
