var database = require("../database/config");

function buscarUltimasMedidas(idMonitoramento, limite_linhas) {

    var instrucaoSql = `SELECT 
        altura_lixo as altura_do_Lixo,
            data_monitoramento,
                        DATE_FORMAT(data_monitoramento,'%H:%i:%s') as dt_monitoramento
                    FROM lotacao
                    WHERE fkSensor = ${idMonitoramento}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idMonitoramento) {

    var instrucaoSql = `SELECT 
        altura_lixo as altura_do_Lixo,
            data_monitoramento,
                        DATE_FORMAT(data_monitoramento,'%H:%i:%s') as dt_monitoramento
                    FROM lotacao
                    WHERE fkSensor = ${idMonitoramento}
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
