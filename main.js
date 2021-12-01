const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 900, 
    height: 600,
    frame: false,
    show: true,
    hasShadow: true
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/gui/gui.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    app.quit()
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})
