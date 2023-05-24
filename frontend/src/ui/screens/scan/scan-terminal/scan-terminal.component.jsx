import { SCAN_TERMINAL_MESSAGE } from "constants";

import styles from "./scan-terminal.module.scss";

const ScanTerminal = ({ processingMessage }) => {
  return (
    <>
      <div className={styles.container}>
        {processingMessage ? (
          <div className={styles.terminal}>
            {processingMessage}
            <span className={styles.dot1}>.</span>
            <span className={styles.dot2}>.</span>
            <span className={styles.dot3}>.</span>
          </div>
        ) : (
          <div className={styles.terminal}>
            {SCAN_TERMINAL_MESSAGE.TERMINAL_READY}
          </div>
        )}
      </div>
    </>
  );
};

export { ScanTerminal };
