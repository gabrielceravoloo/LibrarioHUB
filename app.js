const express = require('express');
const app = express();
const port = 8080;

// Configuração de arquivos globais
app.use(express.static('public'));

// Configuração do motor de visualização
app.set('view engine', 'ejs');

// Configuração de rotas da aplicação
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Configuração de rotas da aplicação
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// =============================================================================

app.get('/', (req, res) => {
    res.send('Hello Strider!');
});
