const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const axios = require('axios');


const BOT_TOKEN = '';
const CLIENT_ID = '';
const GUILD_ID = '';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


const commands = [
    {
        name: 'riotgames',
        description: 'Obter o código de login do Valorant',
        options: [
            {
                type: 3, 
                name: 'email',
                description: 'O email usado para a conta',
                required: true
            },
            {
                type: 3, 
                name: 'senha',
                description: 'A senha do email',
                required: true
            }
        ]
    }
];

const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

(async () => {
    try {
        console.log('Registrando comandos slash...');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: commands
        });
        console.log('Comandos registrados com sucesso!');
    } catch (error) {
        console.error('Erro ao registrar comandos:', error);
    }
})();

async function fetchVerificationCode(email, password) {
    const url = 'https://api.notletters.com/v1/letters';
    const payload = {
        email: email,
        password: password,
        filters: {
            subject: 'Código de login'
        }
    };

    const headers = {
        Authorization: 'Bearer TOKEN!',
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.post(url, payload, { headers: headers });
        const letters = response.data.data.letters;

        if (letters.length === 0) {
            return 'Nenhum código encontrado.';
        }

        const sortedLetters = letters.sort((a, b) => b.date - a.date);

        const latestLetter = sortedLetters[0];
        const htmlContent = latestLetter.letter.html;

        const codeMatch = htmlContent.match(/\b\d{6}\b/);

        if (codeMatch) {
            return `Código de login: ${codeMatch[0]}`;
        } else {
            return 'Código não encontrado no email mais recente.';
        }
    } catch (error) {
        console.error('Erro ao consumir a API:', error.response ? error.response.data : error.message);
        return 'Erro ao buscar o código.';
    }
}

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'riotgames') {
        const email = options.getString('email');
        const senha = options.getString('senha');

        await interaction.reply('Buscando o código de login, aguarde...');

        const code = await fetchVerificationCode(email, senha);
        await interaction.editReply(code);
    }
});
client.login(BOT_TOKEN);
