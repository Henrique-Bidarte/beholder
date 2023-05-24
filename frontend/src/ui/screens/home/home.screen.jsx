import { useHealthCheck } from "hooks";
import { sendNotification } from "utils";
import { useState } from "react";
import { Beholder, Loader } from "ui/components";
import {
  BEHOLDER_VARIATION,
  LOADER_VARIATION,
  CONNECTION_NOTIFICATION,
} from "constants";

import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "constants";
import { EASE_TIMEOUT } from "constants";

const HomeScreen = () => {
  const [loader, setLoader] = useState(false);
  const { getHealthCheck } = useHealthCheck();
  const navigate = useNavigate();

  const handleConnectClick = async () => {
    setLoader(true);
    const serverStatus = await getHealthCheck();

    if (serverStatus) {
      sendNotification(CONNECTION_NOTIFICATION.SUCCESS);
      setTimeout(() => {
        navigate(ROUTE.MENU);
      }, EASE_TIMEOUT.EASE1);
    } else {
      sendNotification(CONNECTION_NOTIFICATION.FAIL);
      setLoader(false);
    }
  };

  return (
    <>
      <Beholder variation={BEHOLDER_VARIATION.HOME} />
      <div className={styles.container}>
        <h1 className={styles.title}>Beholder</h1>
        <button
          disabled={loader}
          onClick={handleConnectClick}
          className={styles.connectButton}
        >
          {loader ? <Loader variation={LOADER_VARIATION.SMALL} /> : "CONNECT"}
        </button>
      </div>
    </>
  );
};

export { HomeScreen };
