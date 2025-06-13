// src/models/medidaModel.js

var database = require("../database/config");

// -------------------- FUNÇÕES PARA DASHBOARD GERAL --------------------

function buscarUltimasMedidas(idBueiro) {
    var instrucaoSql = `
 SELECT 
        l.altura_lixo,
        e.bairro,
        z.nome AS zonasGrafico,
        lg.cidade,
        b.idBueiro,
        e.rua
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        LIMIT 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// ESSE AQUI ESTÁ PEGANDO DA 
function buscarMedidasEmTempoReal(idBueiro) {
    var instrucaoSql = `
        SELECT b.idBueiro, l.altura_lixo, l.data_monitoramento
        FROM lotacao l
        INNER JOIN sensor s ON l.fkSensor = s.idSensor
        INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
        INNER JOIN endereco e ON b.fkEndereco = e.idEndereco
        ORDER BY l.data_monitoramento DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// -------------------- FUNÇÕES DE FILTRO POR ZONA --------------------

function zonaNorte() {
    var instrucaoSql = `
        SELECT l.altura_lixo, e.bairro, z.nome AS zona, lg.cidade, e.rua
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Leste';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Sul';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Sul';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Sul';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Sul';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Leste';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Leste';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Leste';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
        WHERE z.nome = 'Leste';
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
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
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
        WHERE altura_lixo >= 150 AND altura_lixo < 180`;
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
