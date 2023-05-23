const { BrowserWindow, app } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    height: 800,
    width: 1200,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  });

  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});
