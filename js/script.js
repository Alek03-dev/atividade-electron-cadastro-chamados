const form = document.getElementById('formChamado');
const lista = document.getElementById('listaChamados');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;

  await window.api.criarChamado(titulo, descricao);
  
  form.reset();
  carregarChamados();
});

async function carregarChamados() {
  const chamados = await window.api.listarChamados();
  lista.innerHTML = '';

  chamados.forEach((chamado) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${chamado.titulo}</strong><br />
        <small>${chamado.descricao}</small>
      </div>
      <button onclick="deletarChamado(${chamado.id})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}

async function deletarChamado(id) {
  await window.api.deletarChamado(id);
  carregarChamados();
}

carregarChamados();
