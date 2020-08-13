const electron = require('electron')
const { app, BrowserWindow, Menu } = electron;
let mainWindow;


app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/Templates/index.html`).then(r => console.log(r));
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
})
const menuTemplate = [
    {
        label: 'file'
    },
];