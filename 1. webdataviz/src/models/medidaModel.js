var database = require("../database/config");

function buscarUltimasMedidas(idBueiro, limite_linhas) {
    var instrucaoSql = `
    SELECT b.idBueiro,
    l.altura_lixo,
    l.data_monitoramento
    FROM bueiro b
    JOIN sensor s ON s.fkBueiro = b.idBueiro
    JOIN lotacao l ON l.fkSensor = s.idSensor
    ORDER BY b.idBueiro, l.data_monitoramento DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
};
