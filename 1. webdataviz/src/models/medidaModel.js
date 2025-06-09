var database = require("../database/config");

function buscarUltimasMedidas(idBueiro, limite_linhas) {
    // SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.nome_rua, e.bairro, e.zonas
    var instrucaoSql = `
    SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.bairro, z.nome as zonasGrafico
    FROM lotacao l
    INNER JOIN sensor s ON l.fkSensor = s.idSensor
    INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
    INNER JOIN endereco e ON b.fkEndereco = e.idEndereco
    INNER JOIN zona z ON e.fkZona = z.idZona;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idBueiro) {
    // SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.nome_rua
    var instrucaoSql = `
    SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento
    FROM lotacao l
    INNER JOIN sensor s ON l.fkSensor = s.idSensor
    INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
    INNER JOIN endereco e ON b.fkEndereco = e.idEndereco;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Select da Zona Norte da cidade Santana
function zonaNorte() {
    var instrucaoSql = `
    SELECT 
        l.altura_lixo,
        e.bairro,
        z.nome AS zona,
        lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        where z.nome = 'Norte';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function zonaOeste() {
    var instrucaoSql = `
    SELECT 
        l.altura_lixo,
        e.bairro,
        z.nome AS zona,
        lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro
        where z.zona = 'Oeste';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    zonaNorte,
    zonaOeste
};