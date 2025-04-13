const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

