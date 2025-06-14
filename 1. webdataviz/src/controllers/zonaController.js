var medidaModel = require("../models/medidaModel");


function zonaLeste(req, res) {
  medidaModel.zonaLeste()
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error("Erro ao buscar dados da Zona Leste:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function zonaNorte(req, res) {
  medidaModel.zonaNorte()
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error("Erro ao buscar dados da Zona Norte:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function zonaOeste(req, res) {
  medidaModel.zonaOeste()
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error("Erro ao buscar dados da Zona Oeste:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function zonaSul(req, res) {
  medidaModel.zonaSul()
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error("Erro ao buscar dados da Zona Sul:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {

    var idBueiro = req.params.idBueiro;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idBueiro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    buscarMedidasEmTempoReal,
    zonaLeste,
    zonaNorte,
    zonaOeste,
    zonaSul
}
