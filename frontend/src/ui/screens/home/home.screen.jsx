import { BeholderImage } from "ui/assets";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Beholder</h1>
      <img className={styles.beholder} src={BeholderImage} />
      <button
        onClick={() => {
          electron.notificationApi.sendNotification("Conectado");
        }}
        className={styles.connectButton}
      >
        CONNECT
      </button>
    </div>
  );
};

export { Home };
