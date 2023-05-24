import { Beholder } from "ui/components";
import { BEHOLDER_VARIATION } from "constants";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "constants";

import styles from "./menu.module.scss";

const MenuScreen = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTE.HOME);
  };
  return (
    <>
      <Beholder variation={BEHOLDER_VARIATION.MENU} />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <button onClick={handleHomeClick} className={styles.homeButton}>
            HOME
          </button>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    </>
  );
};

export { MenuScreen };
