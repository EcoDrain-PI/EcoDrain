var database = require("../database/config");

function buscarUltimasMedidas(idBueiro, limite_linhas) {
    var instrucaoSql = `
    SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.nome_rua, e.bairro, e.zonas
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