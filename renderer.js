const { ipcRenderer } = require('electron');

function runCommand() {
  const command = document.getElementById('command').value;

  window.api.runCommand(command)
    .then(output => {
      document.getElementById('output').innerText = output;
    })
    .catch(error => {
      document.getElementById('output').innerText = `Error: ${error}`;
    });
}
