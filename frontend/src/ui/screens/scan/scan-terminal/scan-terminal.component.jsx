import { SCAN_TERMINAL_MESSAGE } from "constants";

import styles from "./scan-terminal.module.scss";

const ScanTerminal = ({ processingMessage, scanResult, pingResult }) => {
  const validateScanResult = () => {
    if (typeof scanResult === "string") return scanResult;
    return scanResult.map((e) => renderScanResult(e));
  };
  const renderScanResult = (result) => {
    return (
      <>
        <p>{`Hostname: ${result.hostname}`}</p>
        <p>{`Ip: ${result.ip}`}</p>
        <p>Open Ports:</p>
        {result.openPorts.map((e) => {
          return (
            <>
              <br />
              <p>{`Port: ${e.port}`}</p>
              <p>{`Protocol: ${e.protocol}`}</p>
              <p>{`Service: ${e.service}`}</p>
              <p>{`Method: ${e.method}`}</p>
            </>
          );
        })}
        <p>----</p>
      </>
    );
  };

  const validadePingResult = () => {
    if (typeof pingResult === "string") return pingResult;
    return pingResult.map((e) => renderPingResult(e));
  };
  const renderPingResult = (result) => {
    return (
      <>
        <p>{`Hostname: ${result.hostname}`}</p>
        <p>{`Ip: ${result.ip}`}</p>
        <p>----</p>
      </>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.terminal}>
          {!processingMessage && !scanResult && !pingResult
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

          {pingResult ? validadePingResult() : null}
          {scanResult ? validateScanResult() : null}
        </div>
      </div>
    </>
  );
};

export { ScanTerminal };
