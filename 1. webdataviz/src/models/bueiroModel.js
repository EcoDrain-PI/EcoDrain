var database = require("../database/config");

function buscarBueiroPorEmpresa(idEmpresa) {

  var instrucaoSql = `SELECT * FROM bueiro a WHERE fk_empresa = ${idEmpresa}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idEmpresa, nome) {
  
  var instrucaoSql = `INSERT INTO (nome, fk_empresa) bueiro VALUES (${nome}, ${idEmpresa})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarBueiroPorEmpresa,
  cadastrar
}
