const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    // Create a new window
    mainWindow = new BrowserWindow({
        width: 666,
        height: 980,
        frame: false
    })

    // Quit app when closed (takes care if we add other windows)
    mainWindow.on('closed', function(){
        app.quit();
    });

    //Load the HTML into the window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
})