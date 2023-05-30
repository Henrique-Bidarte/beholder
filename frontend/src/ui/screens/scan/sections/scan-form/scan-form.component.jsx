import { MIN_LOUDNESS_LEVEL, MAX_LOUDNESS_LEVEL } from "constants";
import styles from "./scan-form.module.scss";

const ScanForm = ({
  handleHomeClick,
  handleClearTerminalClick,
  handleScanClick,
  handlePingClick,
  handleDomainInputChange,
  handleLoudnessInputChange,
  handleAgressiveinputChange,
  processingMessage,
  domain,
  scanResult,
  loudness,
  agressive,
}) => {
  return (
    <>
      <div className={styles.utilsMenu}>
        <button
          onClick={handleHomeClick}
          className={styles.utilsButton}
          disabled={processingMessage}
        >
          HOME
        </button>
        <button
          onClick={handleClearTerminalClick}
          className={styles.utilsButton}
          disabled={!scanResult}
        >
          CLEAR TERMINAL
        </button>
      </div>
      <div className={styles.form}>
        Domain Scanner
        <input
          type="text"
          className={styles.formDomainInput}
          placeholder="Insert Domain"
          onChange={handleDomainInputChange}
        />
        <div className={styles.loudnessForm}>
          <div className={styles.loudnessText}>Loudness Level</div>
          <div className={styles.loudnessInput}>
            <input
              type="range"
              min={MIN_LOUDNESS_LEVEL}
              max={MAX_LOUDNESS_LEVEL}
              value={loudness}
              onChange={handleLoudnessInputChange}
              disabled={processingMessage}
            />
          </div>
        </div>
        <div className={styles.agressiveForm}>
          <div className={styles.agressiveText}>Agressive Scan</div>
          <div className={styles.agressiveInput}>
            <input
              type="checkbox"
              value={agressive}
              onChange={handleAgressiveinputChange}
              disabled={processingMessage}
            />
          </div>
        </div>
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
    </>
  );
};

export { ScanForm };
