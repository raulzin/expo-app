// Usando require para importar o Express
const express = require('express');
const app = express();

// Definindo a porta do servidor
const PORT = 3000;

// Dados da API ( Finais Libertadores)
const finaisLibertadores2024 = {
  finals: [
    {
      time_casa: {
        nome: 'Botafogo',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_Botafogo_2023.svg/1200px-Logo_Botafogo_2023.svg.png',
        corPrincipal: "#000000",
        corSecundaria: "#FFFFFF",
      },
      time_fora: {
        nome: 'Atlético Mineiro',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Atlético_Mineiro_escudo_2023.svg/1200px-Atlético_Mineiro_escudo_2023.svg.png',
        corPrincipal: "#000000",
        corSecundaria: "#FFFFFF",
      },
      data: '2024-11-20',
      horario: '21:00',
      estadio: 'Maracanã',
      local: 'Rio de Janeiro',
    },
  ],
};

// Rota para retornar as finais da Libertadores
app.get('/finais-libertadores-2024', (req, res) => {
  res.json(finaisLibertadores2024);
});

// Iniciando o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
//URL   http://localhost:3000/finais-libertadores-2024
