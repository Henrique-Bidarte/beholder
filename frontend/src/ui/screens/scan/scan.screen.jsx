import { Beholder } from "ui/components";
import { BEHOLDER_VARIATION } from "constants";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "constants";
import { ScanTerminal } from "./scan-terminal/scan-terminal.component";
import { SCAN_TERMINAL_MESSAGE } from "constants";
import { useState } from "react";
import { EASE_TIMEOUT } from "constants";

import styles from "./scan.module.scss";

const ScanScreen = () => {
  const [processingMessage, setProcessingMessage] = useState("");
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTE.HOME);
  };

  const handleScanClick = () => {
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.SCANNING);

    setTimeout(() => {
      setProcessingMessage();
    }, EASE_TIMEOUT.EASE4);
  };
  const handlePingClick = () => {
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.PINGING);

    setTimeout(() => {
      setProcessingMessage();
    }, EASE_TIMEOUT.EASE4);
  };
  return (
    <>
      <Beholder variation={BEHOLDER_VARIATION.SCAN} />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.navigation}>
            <button onClick={handleHomeClick} className={styles.homeButton}>
              HOME
            </button>
          </div>
          <div className={styles.form}>
            Domain Scanner
            <input
              type="text"
              className={styles.formInput}
              placeholder="Insert Domain"
            />
            <div className={styles.formButtons}>
              <button
                className={styles.formButton}
                onClick={handleScanClick}
                disabled={processingMessage}
              >
                Scan
              </button>
              <button
                className={styles.formButton}
                onClick={handlePingClick}
                disabled={processingMessage}
              >
                Ping
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <ScanTerminal processingMessage={processingMessage} />
        </div>
      </div>
    </>
  );
};

export { ScanScreen };
