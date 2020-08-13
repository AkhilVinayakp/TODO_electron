const electron = require('electron')
const { app, BrowserWindow, Menu } = electron;
let mainWindow;
// menu Template
const menuTemplate = [
    {
        label: 'file',
        submenu:[
            {
                label: "new TODO"
            },
            {
                label: "Quit",
                click(){
                    app.quit();
                }
            },
            {
                label: "about",
                click() {
                    mainWindow.webContents.send('pushInfo',{
                        arch : process.arch,
                        platform : process.platform,
                        user: process.env.USER
                    })
                }
            }
        ]
    },
];
if(process.platform === 'darvin'){
    menuTemplate.unshift({});
}
// creating menubar from the template
const mainMenu = Menu.buildFromTemplate(menuTemplate);

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/Templates/index.html`).then(r => console.log(r));
    Menu.setApplicationMenu(mainMenu);
})
