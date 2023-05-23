import styles from "./loader.module.scss";

const Loader = ({ variation }) => {
  return <div className={`${styles.loader} ${styles[variation]}`} />;
};

export { Loader };
