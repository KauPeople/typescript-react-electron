const { app, BrowserWindow, Menu, ipcMain, globalShortcut } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let mainWindow
async function createWindow() {
  mainWindow = new BrowserWindow({
    //alwaysOnTop: true,
    minimizable: true,
    maximizable: true,
    closable: true,
    center: true,
    fullscreen: true,
    kiosk: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: path.join(__dirname, './preload.js')
    }
  })

  globalShortcut.register('f5', () => mainWindow.reload())
  globalShortcut.register('CommandOrControl+R', () => mainWindow.reload())
  if (isDev) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/../node_modules/electron`),
      forceHardReset: true
    })
    mainWindow.loadURL('http://localhost:3000')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = undefined
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// ipcMain.on('taobao-info', (e, args) => taobaoUserInfo(e, args))
