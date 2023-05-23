import { BeholderImage } from "ui/assets";
import { useHealthCheck } from "hooks";
import { sendNotification } from "utils";
import { useState } from "react";

import styles from "./home.module.scss";
import { Loader } from "ui/components";
import { LOADER_VARIATION } from "constants";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const { getHealthCheck } = useHealthCheck();

  const handleConnectClick = async () => {
    setLoader(true);
    const serverStatus = await getHealthCheck();

    if (serverStatus) {
      sendNotification("Connected");
      setLoader(false);
    } else {
      sendNotification("Unable to Connect.");
      setLoader(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Beholder</h1>
      <img className={styles.beholder} src={BeholderImage} />
      <button
        disabled={loader}
        onClick={handleConnectClick}
        className={styles.connectButton}
      >
        {loader ? <Loader variation={LOADER_VARIATION.SMALL} /> : "CONNECT"}
      </button>
    </div>
  );
};

export { Home };
