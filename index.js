const electron = require('electron')
const { app, BrowserWindow, Menu } = electron;
let mainWindow;
let addWindow;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/Templates/index.html`).then(r => console.log(r));
    // creating menubar from the template
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
})

// creating a new window
function create_addWindow() {
    addWindow = new BrowserWindow({
        height:140,
        width:400,
        darkTheme:true,
        maximizable:false,// linux won't work
        minimizable:false,// linux won't work
        autoHideMenuBar:true,
        webPreferences:{nodeIntegration:true}
    })
    addWindow.loadURL(`file://${__dirname}/Templates/add.html`);
}
const menuTemplate = [
    {
        label: 'file',
        submenu:[
            {
                label: "new TODO",
                click() {
                    create_addWindow();
                }
            },
            {
                label: "Quit",
                //applying the key binder with the menu
                accelerator: process.platform === 'darvin' ? 'Command+Q' : 'Alt+F4',
                click(){
                    app.quit();
                }
            },
            {
                label: "about",//TODO delete the click event test failed
                click() {
                    // creatAboutWindow();
                }
            }
        ]
    },
];

if(process.platform === 'darvin'){
    menuTemplate.unshift({});
}