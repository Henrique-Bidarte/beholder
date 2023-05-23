const { BrowserWindow, app, ipcMain, Notification } = require("electron");
const path = require("path");

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
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");
};

ipcMain.on("notify", (_, message) => {
  if (process.platform === "win32") {
    app.setAppUserModelId(app.name);
  }
  new Notification({
    body: message,
    icon: "./public/pb-favicon.ico",
  }).show();
});

app.whenReady().then(() => {
  createWindow();
});
