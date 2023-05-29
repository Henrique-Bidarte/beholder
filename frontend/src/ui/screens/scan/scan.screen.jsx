import { Beholder } from "ui/components";
import { BEHOLDER_VARIATION } from "constants";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "constants";
import { ScanForm, ScanTerminal } from "./sections";
import { SCAN_TERMINAL_MESSAGE } from "constants";
import { useState } from "react";

import styles from "./scan.module.scss";
import { useNmapScan } from "hooks";

const ScanScreen = () => {
  const [domain, setDomain] = useState("");
  const [processingMessage, setProcessingMessage] = useState("");
  const [scanResult, setScanResult] = useState();
  const [agressive, setAgressive] = useState(false);

  const { postNmapBaseScan, postNmapPing, postNmapAgressive } = useNmapScan();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTE.HOME);
  };
  const handleClearTerminalClick = () => {
    setProcessingMessage();
    setScanResult();
  };

  const handleDomainInputChange = (e) => {
    setDomain(e.target.value.trim());
  };

  const handleAgressiveinputChange = (e) => {
    setAgressive(e.target.checked);
  };

  const handleScanClick = async () => {
    setScanResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.SCANNING);
    const scanResponse = agressive
      ? await postNmapAgressive({ domain })
      : await postNmapBaseScan({ domain });
    setScanResult(scanResponse);
    setProcessingMessage();
  };
  const handlePingClick = async () => {
    setScanResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.PINGING);
    const pingResponse = await postNmapPing({ domain });
    setScanResult(pingResponse);
    setProcessingMessage();
  };
  return (
    <>
      <Beholder variation={BEHOLDER_VARIATION.SCAN} agressive={agressive} />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <ScanForm
            handleHomeClick={handleHomeClick}
            handleClearTerminalClick={handleClearTerminalClick}
            handleScanClick={handleScanClick}
            handlePingClick={handlePingClick}
            handleDomainInputChange={handleDomainInputChange}
            handleAgressiveinputChange={handleAgressiveinputChange}
            processingMessage={processingMessage}
            domain={domain}
            scanResult={scanResult}
            agressive={agressive}
          />
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
