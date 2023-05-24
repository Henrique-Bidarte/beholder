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
  const [inputValue, setInputValue] = useState("");
  const [processingMessage, setProcessingMessage] = useState("");
  const [scanResult, setScanResult] = useState();

  const { postNmapBaseScan } = useNmapScan();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTE.HOME);
  };

  const handleScanClick = async () => {
    setScanResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.SCANNING);
    const scanResponse = await postNmapBaseScan({ domain: inputValue });
    setScanResult(scanResponse);
    setProcessingMessage();
  };
  const handlePingClick = async () => {
    setScanResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.PINGING);
    const scanResponse = await postNmapBaseScan({ domain: inputValue });
    setScanResult(scanResponse);
    setProcessingMessage();
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
              onChange={handleInputChange}
            />
            <div className={styles.formButtons}>
              <button
                className={styles.formButton}
                onClick={handleScanClick}
                disabled={!inputValue.length || processingMessage}
              >
                Scan
              </button>
              <button
                className={styles.formButton}
                onClick={handlePingClick}
                disabled={!inputValue.length || processingMessage}
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
          />
        </div>
      </div>
    </>
  );
};

export { ScanScreen };
