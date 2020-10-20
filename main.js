// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const Sentry = require('@sentry/electron');

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

Sentry.init({
  appName: 'Sentry Test',
  dsn: "http://7c49c30e7e9f457fb53918ed6ef616ca@localhost:9000/2",
  debug: true,
  useCrashpadMinidumpUploader: true,
  useSentryMinidumpUploader: false,
  sampleRate: 1.0,
});

Sentry.setContext("character", {
  name: "Mighty Fighter",
  age: 19,
  attack_type: "melee",
});
Sentry.setTag("mytag", "mytagvalue");

Sentry.addBreadcrumb({
  category: "auth",
  message: 'hello world2',
  level: Sentry.Severity.Info,
});

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

setTimeout(() => {
  console.log("Simulating crash");
  process.crash();
}, 5000);