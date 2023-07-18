const teste = (req, res) => {
    const testeProjeto = "Projeto funcionando!";

    res.send({testeProjeto});
}

module.exports = { teste };