var database = require("../database/config");

// -------------------- FUNÇÕES PARA DASHBOARD GERAL --------------------

function buscarUltimasMedidas(idBueiro) {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zonasGrafico, b.idBueiro, e.rua
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        LIMIT 8;
    `;
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idBueiro) {
    var instrucaoSql = `
        SELECT b.idBueiro, l.altura_lixo, l.data_monitoramento
        FROM lotacao l
        INNER JOIN sensor s ON l.fkSensor = s.idSensor
        INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
        INNER JOIN endereco e ON b.fkEndereco = e.idEndereco
        ORDER BY l.data_monitoramento DESC;
    `;
    return database.executar(instrucaoSql);
}

// -------------------- FUNÇÕES POR ZONA --------------------

function zonaLeste() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, e.rua
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        WHERE z.nome = 'Leste';
    `;
    return database.executar(instrucaoSql);
}

function zonaNorte() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, e.rua
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        WHERE z.nome = 'Norte';
    `;
    return database.executar(instrucaoSql);
}

function zonaOeste() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, e.rua
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        WHERE z.nome = 'Oeste';
    `;
    return database.executar(instrucaoSql);
}

function zonaSul() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, e.rua
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        WHERE z.nome = 'Sul';
    `;
    return database.executar(instrucaoSql);
}

// -------------------- KPI ALERTAS --------------------

function buscarAlertasAtencaoPorPeriodoDB(filtro) {
    let instrucaoSql;

    switch (filtro) {
        case '1h':
            instrucaoSql = `
                SELECT COUNT(*) AS atencao
                FROM lotacao
                WHERE altura_lixo >= 150 AND altura_lixo < 180
                AND data_monitoramento >= NOW() - INTERVAL 1 HOUR;
            `;
            break;
        case '24h':
            instrucaoSql = `
                SELECT COUNT(*) AS atencao
                FROM lotacao
                WHERE altura_lixo >= 150 AND altura_lixo < 180
                AND data_monitoramento >= NOW() - INTERVAL 24 HOUR;
            `;
            break;
        case '1w':
            instrucaoSql = `
                SELECT COUNT(*) AS atencao
                FROM lotacao
                WHERE altura_lixo >= 150 AND altura_lixo < 180
                AND data_monitoramento >= NOW() - INTERVAL 7 DAY;
            `;
            break;
        default:
            return Promise.reject(new Error("Filtro de período inválido para a consulta ao DB."));
    }

    return database.executar(instrucaoSql);
}

function buscarAlertasAtencaoTotalDB() {
    var instrucaoSql = `
        SELECT COUNT(*) AS atencao
        FROM lotacao
        WHERE altura_lixo >= 150 AND altura_lixo < 180;
    `;
    return database.executar(instrucaoSql);
}

function buscarAlertasRiscoTotalDB() {
    var instrucaoSql = `
        SELECT COUNT(*) AS risco
        FROM lotacao
        WHERE altura_lixo > 180;
    `;
    return database.executar(instrucaoSql);
}

function buscarAlertasRiscoPorPeriodoDB(filtro) {
    let instrucaoSql;

    switch (filtro) {
        case '1h':
            instrucaoSql = `
                SELECT COUNT(*) AS risco
                FROM lotacao
                WHERE altura_lixo > 180
                AND data_monitoramento >= NOW() - INTERVAL 1 HOUR;
            `;
            break;
        case '24h':
            instrucaoSql = `
                SELECT COUNT(*) AS risco
                FROM lotacao
                WHERE altura_lixo > 180
                AND data_monitoramento >= NOW() - INTERVAL 24 HOUR;
            `;
            break;
        case '1w':
            instrucaoSql = `
                SELECT COUNT(*) AS risco
                FROM lotacao
                WHERE altura_lixo > 180
                AND data_monitoramento >= NOW() - INTERVAL 7 DAY;
            `;
            break;
        default:
            return Promise.reject(new Error("Filtro inválido"));
    }

    return database.executar(instrucaoSql);
}

// -------------------- EXPORTAÇÃO --------------------

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    zonaLeste,
    zonaNorte,
    zonaOeste,
    zonaSul,
    buscarAlertasAtencaoPorPeriodoDB,
    buscarAlertasAtencaoTotalDB,
    buscarAlertasRiscoTotalDB,
    buscarAlertasRiscoPorPeriodoDB
};
