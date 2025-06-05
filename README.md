# 📞 Sistema de Chamados - Electron

Um sistema desktop para gerenciamento de chamados técnicos desenvolvido com Electron.

## 📋 Sobre o Projeto

Este projeto é uma aplicação desktop que permite aos usuários criar, visualizar e excluir chamados técnicos. Foi desenvolvido como atividade prática para demonstrar os conceitos fundamentais do Electron, incluindo comunicação entre processos (IPC) e integração com banco de dados.

## ✨ Funcionalidades

- ✅ **Criar Chamados**: Adicione novos chamados com título e descrição
- ✅ **Listar Chamados**: Visualize todos os chamados abertos
- ✅ **Excluir Chamados**: Remova chamados concluídos ou desnecessários
- 🖥️ **Interface Responsiva**: Interface moderna e intuitiva

## 🛠️ Tecnologias Utilizadas

- **Electron** - Framework para aplicações desktop
- **Node.js** - Runtime JavaScript
- **HTML/CSS/JavaScript** - Interface do usuário
- **MySQL** - Banco de dados (planejado)

## 📁 Estrutura do Projeto

```
atividade-electron-chamados/
├── main.js              # Processo principal do Electron
├── preload.js           # Script de preload para comunicação segura
├── package.json         # Configurações e dependências
├── pages/
│   └── index.html       # Interface principal
├── js/
│   └── script.js        # Lógica da interface
└── styles/
    └── style.css        # Estilos da aplicação
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd atividade-electron-chamados
```

2. Instale as dependências:
```bash
npm install
```

3. Execute a aplicação:
```bash
npm start
```

Para desenvolvimento com hot reload:
```bash
npm run dev
```

## 🗄️ Configuração do Banco de Dados

**Banco sugerido:** `chamados_db`

Execute o SQL abaixo para criar o banco e a tabela:

```sql
CREATE DATABASE chamados_db;
USE chamados_db;

CREATE TABLE chamados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  descricao TEXT
);
```

## ⚙️ Configuração

### Implementações Pendentes

Para completar a funcionalidade, implemente:

1. **No `main.js`**:
   - Conexão com o banco de dados MySQL
   - Handler `criarChamado` para inserir novos chamados
   - Handler `listarChamados` para buscar todos os chamados
   - Corrigir o caminho do preload script

2. **No `preload.js`**:
   - Função `criarChamado` para comunicação com o processo principal
   - Função `listarChamados` para buscar dados

## 📝 Exemplo de Uso

1. **Criar um chamado**: Preencha o título e descrição, clique em "Abrir Chamado"
2. **Visualizar chamados**: Todos os chamados aparecem automaticamente na lista
3. **Excluir chamado**: Clique no botão "Excluir" ao lado do chamado desejado

## 🔧 Scripts Disponíveis

- `npm start` - Executa a aplicação
- `npm run dev` - Executa com hot reload (electronmon)

## 📚 Recursos para Estudo

- [Documentação oficial do Electron](https://www.electronjs.org/docs)
- [IPC (Inter-Process Communication)](https://www.electronjs.org/docs/latest/tutorial/ipc)
- [Context Isolation](https://www.electronjs.org/docs/latest/tutorial/context-isolation)
- [Preload Scripts](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload)

## 🤝 Contribuição

Este é um projeto educacional. Sinta-se à vontade para fazer melhorias e sugestões!

## 📄 Licença

ISC License

---

**Desenvolvido para fins educacionais - UC12 Desenvolvimento de Aplicações Desktop**
