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

function contarBueiro(){
  var SQL = `
  select count(*) as 'total_bueiro' from bueiro;`

  return database.executar(SQL)
}


module.exports = {
  buscarBueiroPorEmpresa,
  cadastrar,
  contarBueiro
}
