import { BeholderDefaultImage, BeholderAgressiveImage } from "ui/assets";
import { BEHOLDER_LOUDNESS_VARIATION } from "constants";

import styles from "./beholder.module.scss";

const Beholder = ({ variation, agressive, loudness }) => {
  return (
    <img
      className={`${styles.beholder} ${styles[variation]} ${
        styles[BEHOLDER_LOUDNESS_VARIATION[loudness]]
      }`}
      src={agressive ? BeholderAgressiveImage : BeholderDefaultImage}
    />
  );
};

export { Beholder };
