const {contextBridge, ipcRenderer} = require('electron');

function criarChamado(titulo, descricao){
  return ipcRenderer.invoke('criar-chamado', titulo, descricao);
}

function listarChamados(){
  return ipcRenderer.invoke('listar-chamados')
}

function deletarChamado(id) {
  return ipcRenderer.invoke('deletar-chamado', id);
}

contextBridge.exposeInMainWorld('api', {
  criarChamado,
  listarChamados,
  deletarChamado,
});