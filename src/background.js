'use strict'

import { app, protocol, BrowserWindow, ipcMain, Notification, Tray, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import path from 'path'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
let win
let tray

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#fff',
    show: false,
    // frame: false,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  win.once('ready-to-show', () => {
    win.maximize()
    win.show()
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  //安装vue开发工具，国内网安装不下来，可以注释掉
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   try {
  //     await installExtension(VUEJS_DEVTOOLS)
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString())
  //   }
  // }
  createWindow()
  const iconPath = isDevelopment ? './public/img.jpg' : path.join(__dirname, '/img.jpg')
  tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '设置',
      click: function () {
        console.log('setting')
      }
    },
    {
      label: '重新加载',
      click: function () {
        win.reload()
      }
    },
    {
      label: '最小化',
      click: function () {
        win.hide();
      }
    },
    {
      label: '退出',
      click: function () {
        if (process.platform !== 'darwin') {
          app.quit();
        }
      }
    }
  ])
  tray.setToolTip('Electron应用')
  tray.setContextMenu(contextMenu)
  tray.on('click', () => {
    win.webContents.send('trayIconClick', iconPath);//我们也可以设置点击图标时我们向渲染进程发送异步消息等等
  });
  tray.on('double-click', function () {
    win.show();
  });
  // 点击关闭按钮让应用保存在托盘
  win.on('close', (e) => {
    if (!BrowserWindow.getFocusedWindow()) {
      win = null;
    } else {
      // 阻止窗口的关闭事件
      e.preventDefault();
      win.hide();
    }
  })
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
ipcMain.handle('home', () => {
  const notification = new Notification({
    title: 'hello world'
  })
  notification.show()
  notification.on('click', () => {
    win.webContents.send('hello-click')
  })
})
ipcMain.handle('new-win', () => {
  const child = new BrowserWindow({ parent: win })
  child.loadURL('https://www.baidu.com/')
  child.once('ready-to-show', () => {
    child.show()
  })
})

