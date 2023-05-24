import { BeholderImage } from "ui/assets";

import styles from "./beholder.module.scss";

const Beholder = ({ variation }) => {
  return (
    <img
      className={`${styles.beholder} ${styles[variation]}`}
      src={BeholderImage}
    />
  );
};

export { Beholder };
