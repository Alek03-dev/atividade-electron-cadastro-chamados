const {contextBridge, ipcRenderer} = require('electron');

function criarChamado(titulo, descricao){

  console.log("Função Criar Chamado")
  console.log("Titulo: ", titulo)
  console.log("Descrição: ", descricao)

  ipcRenderer.invoke('criarChamado', titulo, descricao);
}

function listarChamados(){
  return ipcRenderer.invoke('listarChamado')
}

function deletarChamado(id) {
  return ipcRenderer.invoke('deletar-chamado', id);
}

contextBridge.exposeInMainWorld('api', {
  criarChamado,
  listarChamados,
  deletarChamado
});