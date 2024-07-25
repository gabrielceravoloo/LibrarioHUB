exports.home = (req, res) => {
    res.render('index', {
        title: 'Pagina Inicial',
        content: '<p>Conteúdo dinâmico para a página inicial.</p>'
    });
};

exports.sobre = (req, res) => {
    res.render('sobre', {
        title: 'Sobre',
        content: '<p>Conteúdo dinâmico sobre nós.</p>'
    });
};
