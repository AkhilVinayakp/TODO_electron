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
                    //mainWindow.webContents.send('pushInfo',
                    //     {
                    //     arch : process.arch,
                    //     platform : process.platform,
                    //     user: process.env.USER
                    // }
                      //  p
                    //);
                }
            }
        ]
    },
];

if(process.platform === 'darvin'){
    menuTemplate.unshift({});
}