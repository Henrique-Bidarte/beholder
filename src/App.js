import styles from "./App.module.scss";
import { Home } from "ui/screens";

import "ui/styles/globals.scss";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.appContainer}>
        <Home />
      </div>
    </div>
  );
}

export default App;
