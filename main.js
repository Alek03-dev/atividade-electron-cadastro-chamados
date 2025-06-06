const { app, BrowserWindow, ipcMain } = require("electron");
const mysql = require("mysql2/promise")

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      preload: __dirname + "/preload.js",
      contextIsolation: true,
    },
  });

  win.loadFile("pages/index.html");
};

ipcMain.handle("listar-chamados", async () => {
  
  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chamados_db"
  });

  const query = await conexao.execute("SELECT * FROM chamados");
  await conexao.end();

  return query[0];
})

ipcMain.handle("criar-chamado", async (_, titulo, descricao) => {
  console.log("AGORA SIM CHEGOU NO BACKEND")
  console.log("Titulo: ", titulo)
  console.log("Descrição: ", descricao)

  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chamados_db" 
  });
  
  const query = await conexao.execute("INSERT INTO chamados (titulo, descricao) VALUES (?, ?) ", [titulo, descricao]);
  await conexao.end();

  return query[0];
})


ipcMain.handle('deletar-chamado', async(_, id) => {
  console.log("ID: ", id)

  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chamados_db"
  });

  const query  = await conexao.execute('DELETE FROM chamados WHERE id = ?', [id]);
  await conexao.end();
  return query[0];
});


app.whenReady().then(createWindow);
