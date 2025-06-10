// src/models/medidaModel.js

var database = require("../database/config");

// -------------------- FUNÇÕES PARA DASHBOARD GERAL --------------------

function buscarUltimasMedidas(idBueiro, limite_linhas) {
    var instrucaoSql = `
        SELECT b.idBueiro, l.altura_lixo, l.data_monitoramento, e.bairro, z.nome as zonasGrafico
        FROM lotacao l
        INNER JOIN sensor s ON l.fkSensor = s.idSensor
        INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
        INNER JOIN endereco e ON b.fkEndereco = e.idEndereco
        INNER JOIN zona z ON e.fkZona = z.idZona
        WHERE b.idBueiro = ${idBueiro}
        ORDER BY l.data_monitoramento DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idBueiro) {
    var instrucaoSql = `
        SELECT b.idBueiro, l.altura_lixo, l.data_monitoramento
        FROM lotacao l
        INNER JOIN sensor s ON l.fkSensor = s.idSensor
        INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
        INNER JOIN endereco e ON b.fkEndereco = e.idEndereco
        WHERE b.idBueiro = ${idBueiro}
        ORDER BY l.data_monitoramento DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// -------------------- FUNÇÕES DE FILTRO POR ZONA --------------------

function zonaNorte() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Norte';
    `;
    return database.executar(instrucaoSql);
}

function zonaSulRP() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Sul' AND lg.cidade = 'Rio Preto';
    `;
    return database.executar(instrucaoSql);
}

function zonaSulJabaquara() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Sul' AND lg.cidade = 'Jabaquara';
    `;
    return database.executar(instrucaoSql);
}

function zonaSulCL() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Sul' AND lg.cidade = 'Campo Limpo';
    `;
    return database.executar(instrucaoSql);
}

function zonaSulCapao() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Sul' AND lg.cidade = 'Capão Redondo';
    `;
    return database.executar(instrucaoSql);
}

function zonaLesteItaquera() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Leste' AND lg.cidade = 'Itaquera';
    `;
    return database.executar(instrucaoSql);
}

function zonaLesteMooca() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Leste' AND lg.cidade = 'Mooca';
    `;
    return database.executar(instrucaoSql);
}

function zonaLestePenha() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Leste' AND lg.cidade = 'Penha';
    `;
    return database.executar(instrucaoSql);
}

function zonaLesteTatuape() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Leste' AND lg.cidade = 'Tatuapé';
    `;
    return database.executar(instrucaoSql);
}

function zonaOeste() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        WHERE z.nome = 'Oeste';
    `;
    return database.executar(instrucaoSql);
}

// -------------------- FUNÇÕES DE KPI / ALERTAS --------------------

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
        WHERE altura_lixo >= 150 AND altura_lixo < 180    `;
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
    buscarAlertasAtencaoPorPeriodoDB,
    buscarAlertasAtencaoTotalDB,
    buscarAlertasRiscoTotalDB,
    zonaNorte,
    zonaSulRP,
    zonaSulJabaquara,
    zonaSulCL,
    zonaSulCapao,
    zonaLesteItaquera,
    zonaLesteMooca,
    zonaLestePenha,
    zonaLesteTatuape,
    zonaOeste,
    buscarAlertasRiscoPorPeriodoDB
};
