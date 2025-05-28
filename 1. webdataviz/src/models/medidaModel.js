var database = require("../database/config");

function buscarUltimasMedidas(idBueiro, limite_linhas) {
    var instrucaoSql = `
    SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.nome_rua
    FROM lotacao l
    INNER JOIN sensor s ON l.fkSensor = s.idSensor
    INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
    INNER JOIN endereco e ON b.fkEndereco = e.idEndereco;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idBueiro) {
    var instrucaoSql = `
    SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.nome_rua
    FROM lotacao l
    INNER JOIN sensor s ON l.fkSensor = s.idSensor
    INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
    INNER JOIN endereco e ON b.fkEndereco = e.idEndereco;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
};