const { app, BrowserWindow, ipcMain } = require("electron");
const mysql = require("mysql2/promise")

function createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      preload: __dirname + "/preload_.js",
      contextIsolation: true,
    },
  });

  win.loadFile("pages/index.html");
};

ipcMain.handle("listar-chamados", async function() {
  
  var conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chamados_db"
  })

  var query = await conexao.execute("SELECT * FROM feedback")

  console.log("Query ", query)

  return query[0]
})

ipcMain.handle("criar-chamados", async function(evento, titulo, descricao){
  console.log("AGORA SIM CHEGOU NO BACKEND")
  console.log("Titulo: ", titulo)
  console.log("Descrição: ", descricao)

  var conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chamados_db"
  })
  
  conexao.execute("INSERT INTO feedback (nome, mensagem) VALUES (?, ?) ", [nome, mensagem])
})


ipcMain.handle('deletar-chamado', async(_, id) => {
  console.log("ID: ", id)

  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chamados_db"
  })

  const query  = await conexao.execute('DELETE FROM chmados WHERE id = ?', [id])
});


app.whenReady().then(createWindow);
