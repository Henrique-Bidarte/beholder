import { Beholder } from "ui/components";
import { BEHOLDER_VARIATION } from "constants";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "constants";
import { ScanTerminal } from "./scan-terminal/scan-terminal.component";
import { SCAN_TERMINAL_MESSAGE } from "constants";
import { useState } from "react";

import styles from "./scan.module.scss";
import { useNmapScan } from "hooks";

const ScanScreen = () => {
  const [domain, setDomain] = useState("");
  const [processingMessage, setProcessingMessage] = useState("");
  const [scanResult, setScanResult] = useState();
  const [pingResult, setPingResult] = useState();

  const { postNmapBaseScan, postNmapPing } = useNmapScan();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTE.HOME);
  };
  const handleClearClick = () => {
    setProcessingMessage();
    setScanResult();
    setPingResult();
  };

  const handleScanClick = async () => {
    setScanResult();
    setPingResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.SCANNING);
    const scanResponse = await postNmapBaseScan({ domain });
    setScanResult(scanResponse);
    setProcessingMessage();
  };
  const handlePingClick = async () => {
    setScanResult();
    setPingResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.PINGING);
    const pingResponse = await postNmapPing({ domain });
    setPingResult(pingResponse);
    setProcessingMessage();
  };
  const handleInputChange = (e) => {
    setDomain(e.target.value.trim());
  };
  return (
    <>
      <Beholder variation={BEHOLDER_VARIATION.SCAN} />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.utilsMenu}>
            <button
              onClick={handleHomeClick}
              className={styles.utilsButton}
              disabled={processingMessage}
            >
              HOME
            </button>
            <button
              onClick={handleClearClick}
              className={styles.utilsButton}
              disabled={!scanResult && !pingResult}
            >
              CLEAR TERMINAL
            </button>
          </div>
          <div className={styles.form}>
            Domain Scanner
            <input
              type="text"
              className={styles.formInput}
              placeholder="Insert Domain"
              onChange={handleInputChange}
            />
            <div className={styles.formButtons}>
              <button
                className={styles.formButton}
                onClick={handleScanClick}
                disabled={!domain || processingMessage}
              >
                Scan
              </button>
              <button
                className={styles.formButton}
                onClick={handlePingClick}
                disabled={!domain || processingMessage}
              >
                Ping
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <ScanTerminal
            processingMessage={processingMessage}
            scanResult={scanResult}
            pingResult={pingResult}
          />
        </div>
      </div>
    </>
  );
};

export { ScanScreen };
