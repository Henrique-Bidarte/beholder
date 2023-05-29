import styles from "./scan-form.module.scss";

const ScanForm = ({
  handleHomeClick,
  handleClearTerminalClick,
  handleScanClick,
  handlePingClick,
  handleDomainInputChange,
  handleAgressiveinputChange,
  processingMessage,
  domain,
  scanResult,
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
        <div className={styles.agressiveForm}>
          <input
            type="checkbox"
            value={agressive}
            onChange={handleAgressiveinputChange}
          />
          Agressive Scan
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
