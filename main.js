const { app, BrowserWindow } = require("electron");

function createWindow() {
  //Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    },
  });

  //add load the index.html of the app.
  win.loadURL("http://localhost:3000/");

  //open the devtools.
  //win.webContents.openDevTools();
}

//  This method will be called when Electron has finished.
//  Initialization and is read to create browser windows.
//  Some APIs can only be used after this ievent occurs.
app.whenReady().then(createWindow);

//Quit when all windows are closed.
app.on("window-all-closed", () => {
  //  On macOS it is common for applications and their menu bar
  //  to stau active until the user quits aexplicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('active', () => {
    //  On macOS it's a commin to re-create a window in the app when the
    //  dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

//  In this file u can include the rest of yours app's specific main process
//  code. You can also put them in separete files and require them here.