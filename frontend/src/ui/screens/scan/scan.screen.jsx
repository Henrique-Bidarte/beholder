import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNmapScan } from "hooks";
import {
  ROUTE,
  LOUDNESS_LEVEL,
  DEFAULT_LOUDNESS_LEVEL,
  BEHOLDER_VARIATION,
  SCAN_TERMINAL_MESSAGE,
} from "constants";
import { Beholder } from "ui/components";
import { ScanForm, ScanTerminal } from "./sections";

import styles from "./scan.module.scss";

const ScanScreen = () => {
  const [domain, setDomain] = useState();
  const [processingMessage, setProcessingMessage] = useState();
  const [scanResult, setScanResult] = useState();
  const [loudness, setLoudness] = useState(DEFAULT_LOUDNESS_LEVEL);
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

  const handleLoudnessInputChange = (e) => {
    setLoudness(e.target.value);
  };

  const handleAgressiveinputChange = (e) => {
    setAgressive(e.target.checked);
  };

  const handleScanClick = async () => {
    setScanResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.SCANNING);
    const scanResponse = agressive
      ? await postNmapAgressive({ domain, loudness: LOUDNESS_LEVEL[loudness] })
      : await postNmapBaseScan({ domain, loudness: LOUDNESS_LEVEL[loudness] });
    setScanResult(scanResponse);
    setProcessingMessage();
  };
  const handlePingClick = async () => {
    setScanResult();
    setProcessingMessage(SCAN_TERMINAL_MESSAGE.PINGING);
    const pingResponse = await postNmapPing({
      domain,
      loudness: LOUDNESS_LEVEL[loudness],
    });
    setScanResult(pingResponse);
    setProcessingMessage();
  };
  return (
    <>
      <Beholder
        variation={BEHOLDER_VARIATION.SCAN}
        agressive={agressive}
        loudness={loudness}
      />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <ScanForm
            handleHomeClick={handleHomeClick}
            handleClearTerminalClick={handleClearTerminalClick}
            handleScanClick={handleScanClick}
            handlePingClick={handlePingClick}
            handleDomainInputChange={handleDomainInputChange}
            handleLoudnessInputChange={handleLoudnessInputChange}
            handleAgressiveinputChange={handleAgressiveinputChange}
            processingMessage={processingMessage}
            domain={domain}
            scanResult={scanResult}
            loudness={loudness}
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
