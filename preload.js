const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld(
  "api", {
  runCommand: (command) => {
    return ipcRenderer.invoke('run-command', command);
  }
}
);
