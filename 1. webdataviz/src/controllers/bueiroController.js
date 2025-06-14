var bueiroModel = require("../models/bueiroModel");

function buscarBueiroPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  bueiroModel.buscarBueiroPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os bueiros: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function contarBueiro(req, res){
  bueiroModel.contarBueiro().then(
    function(resultado){
      res.json(resultado)
    }
  ).catch(
    function(erro){
      console.log(erro);
      console.log(
        "\nHouve um erro ao obter o numero de bueiros! Erro: ",
            erro.sqlMessage
      )
      res.status(500).json(erro.sqlMessage);
    }
  )
}


function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    bueiroModel.cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarBueiroPorEmpresa,
  cadastrar,
  contarBueiro
}