import { SCAN_TERMINAL_MESSAGE } from "constants";

import styles from "./scan-terminal.module.scss";

const ScanTerminal = ({ processingMessage, scanResult }) => {
  const generateScanResult = (result) => {
    return (
      <>
        <p>{`Hostname: ${result.hostname}`}</p>
        <p>{`Ip: ${result.ip}`}</p>
        <p>Open Ports:</p>
        {result.openPorts.map((e) => {
          return (
            <>
              <p>----</p>
              <p>{`Port: ${e.port}`}</p>
              <p>{`Protocol: ${e.protocol}`}</p>
              <p>{`Service: ${e.service}`}</p>
              <p>{`Method: ${e.method}`}</p>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.terminal}>
          {!processingMessage && !scanResult
            ? SCAN_TERMINAL_MESSAGE.TERMINAL_READY
            : null}

          {processingMessage ? (
            <>
              {processingMessage}
              <span className={styles.dot1}>.</span>
              <span className={styles.dot2}>.</span>
              <span className={styles.dot3}>.</span>
            </>
          ) : null}

          {scanResult ? (
            <>{scanResult.map((e) => generateScanResult(e))}</>
          ) : null}
        </div>
      </div>
    </>
  );
};

export { ScanTerminal };
