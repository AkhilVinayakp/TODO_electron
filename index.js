const electron = require('electron')
const { app, BrowserWindow, Menu } = electron;
let mainWindow;
let addWindow;

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
const mainMenu = Menu.buildFromTemplate(menuTemplate);
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/Templates/index.html`).then(r => console.log(r));
    // creating menubar from the template
    // close all the windows if the main window is closed
    mainWindow.on('closed',()=>app.quit());

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
        webPreferences:{nodeIntegration:true},
        title:"ADD NEW TODO"
    })
    addWindow.loadURL(`file://${__dirname}/Templates/add.html`);
    Menu.setApplicationMenu(null); //TODO main application menu disabled but not restored after exiting // DONE
    addWindow.on('closed',()=> Menu.setApplicationMenu(mainMenu))
}
