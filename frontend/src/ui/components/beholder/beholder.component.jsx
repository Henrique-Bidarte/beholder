import { BeholderDefaultImage, BeholderAgressiveImage } from "ui/assets";

import styles from "./beholder.module.scss";

const Beholder = ({ variation, agressive }) => {
  return (
    <img
      className={`${styles.beholder} ${styles[variation]}`}
      src={agressive ? BeholderAgressiveImage : BeholderDefaultImage}
    />
  );
};

export { Beholder };
