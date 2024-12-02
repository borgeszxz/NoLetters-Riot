# 🎮 RiotGames Login Code Fetcher Bot 🚀

Este é um bot para Discord que permite aos usuários obterem o código de login do Valorant enviado por e-mail. Ele usa a API do NotLetters para buscar e-mails e extrair códigos.

## 🛠️ Configuração

Antes de iniciar o bot, certifique-se de configurar as variáveis abaixo:

1. **🔑 BOT_TOKEN**: Token do bot do Discord.
2. **🆔 CLIENT_ID**: ID do cliente da aplicação Discord.
3. **🌐 GUILD_ID**: ID do servidor Discord onde o bot será registrado.
4. **🔒 Bearer Token**: Autorização para usar a API NotLetters.

### 📋 Pré-requisitos

- 🟢 Node.js 16.9.0 ou superior.
- 🛡️ Uma conta registrada no Discord Developer Portal para obter o token do bot.
- 📦 Dependências do projeto: `discord.js` e `axios`.

### ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/borgeszxz/NoLetters-Riot.git
   ```

2. Instale as dependências:
   ```bash
   npm install discord.js axios
   ```

3. Configure as variáveis de ambiente no arquivo:
   - Substitua as constantes `BOT_TOKEN`, `CLIENT_ID`, `GUILD_ID` e `Bearer Token` no código-fonte com seus respectivos valores.

### 📄 Registro de Comandos

Os comandos são registrados automaticamente quando o bot é inicializado. O comando `/riotgames` é configurado para aceitar dois argumentos:

- **📧 email**: O e-mail usado para a conta do Valorant (obrigatório).
- **🔐 senha**: A senha do e-mail (obrigatório).

---

## 🚀 Como funciona?

1. O usuário utiliza o comando `/riotgames` no Discord, fornecendo o e-mail e a senha.
2. O bot responde com uma mensagem: `Buscando o código de login, aguarde...`.
3. O bot consulta a API NotLetters, busca o e-mail mais recente com o código de login e extrai o código.
4. O código é enviado de volta ao usuário no Discord.

---

## 🐞 Erros e Soluções

- **Erro ao registrar comandos**: Verifique o `BOT_TOKEN`, `CLIENT_ID` e `GUILD_ID`.
- **Erro ao buscar o código**: Certifique-se de que o Bearer Token e o e-mail fornecido estão corretos.

---

## 📜 Código Explicado

### Estrutura do Bot

1. **Registro de Comandos**:
   - Configura e registra comandos no servidor usando a API REST do Discord.

2. **Interação com o Usuário**:
   - Escuta interações do tipo `slash command`.
   - Busca o código de login do e-mail especificado.

3. **Consulta à API NotLetters**:
   - Envia uma solicitação POST para buscar e-mails com o assunto `Código de login`.
   - Extrai o código do conteúdo HTML do e-mail.

---

## 🎯 Comando Suportado

- **`/riotgames`**: Obter o código de login do Valorant.
  - Argumentos:
    - `email` (📧 obrigatório): O e-mail usado na conta.
    - `senha` (🔐 obrigatório): A senha do e-mail.

---

## 📞 Suporte

Se você encontrar problemas, entre em contato pelo Discord! 😄

--- 
