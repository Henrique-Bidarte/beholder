import { SCAN_TERMINAL_MESSAGE } from "constants";

import styles from "./scan-terminal.module.scss";

const ScanTerminal = ({ processingMessage, scanResult }) => {
  const validateScanResult = () => {
    if (typeof scanResult === "string") return scanResult;
    return scanResult.map((e) => renderScanResult(e));
  };
  const renderScanResult = (result) => {
    return (
      <div key={result.ip}>
        <p>{`Hostname: ${result.hostname}`}</p>
        <p>{`Ip: ${result.ip}`}</p>

        <p>{result.mac ? `Mac: ${result.mac}` : null}</p>
        <p>{result.osNmap ? `Os: ${result.osNmap}` : null}</p>
        <br />
        <p>{result.openPorts?.length ? `Open Ports:` : null}</p>
        {result.openPorts?.length
          ? result.openPorts.map((e) => {
              return (
                <div key={e.port}>
                  <br />
                  <p>{`Port: ${e.port}`}</p>
                  <p>{`Protocol: ${e.protocol}`}</p>
                  <p>{`Service: ${e.service}`}</p>
                  <p>{`Method: ${e.method}`}</p>
                </div>
              );
            })
          : null}
        <br />
        <p>----</p>
      </div>
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

          {scanResult ? validateScanResult() : null}
        </div>
      </div>
    </>
  );
};

export { ScanTerminal };
