const { BrowserWindow, app, ipcMain, Notification } = require("electron");
const path = require("path");

const CLIENT_URL = "http://localhost:3000";
const PRELOAD_FILE = "preload.js";
const PROCESS_PLATAFORM = "win32";
const NOTIFY_METHOD = "notify";
const NOTIFICATION_ICON_URL = "./public/pb-favicon.ico";

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
      preload: path.join(__dirname, PRELOAD_FILE),
    },
  });

  win.loadURL(CLIENT_URL);
};

ipcMain.on(NOTIFY_METHOD, (_, message) => {
  if (process.platform === PROCESS_PLATAFORM) {
    app.setAppUserModelId(app.name);
  }
  new Notification({
    body: message,
    icon: NOTIFICATION_ICON_URL,
  }).show();
});

app.whenReady().then(() => {
  createWindow();
});
