const electron = require('electron');
const { ipcRenderer } = electron

ipcRenderer.on('pushInfo',(event,data)=>{
//     document.getElementById("info").innerHTML=`<p>
//     <table>
//         <tr>
//         <td>ARCHITECTURE</td>
//         <td>${data.arch}</td>
//         </tr>
//         <tr>
//         <td>platform</td>
//         <td>${data.platform}</td>
//         </tr>
//         <tr>
//         <td>User</td>
//         <td>${data.user}</td>
//         </tr>
//     </table>
// </p>`
    document.getElementById("info").innerHTML = '<h2>hekk</h2>'
});