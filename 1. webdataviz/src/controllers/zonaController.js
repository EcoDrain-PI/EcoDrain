var medidaModel = require("../models/medidaModel");


function zonaNorte(req, res) {
    medidaModel.zonaNorte(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Zona Sul

function zonaSulRP(req, res) {
    medidaModel.zonaSulRP(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function zonaSulJabaquara(req, res) {
    medidaModel.zonaSulJabaquara(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function zonaSulCapao(req, res) {
    medidaModel.zonaSulCapao(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function zonaSulCL(req, res) {
    medidaModel.zonaSulCampoLimpo(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Zona Leste

function zonaLesteItaquera(req, res) {
    medidaModel.zonaLesteItaquera(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function zonaLesteMooca(req, res) {
    medidaModel.zonaLesteMooca(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function zonaLestePenha(req, res) {
    medidaModel.zonaLestePenha(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function zonaLesteTatuape(req, res) {
    medidaModel.zonaLesteTatuape(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
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
    zonaNorte,
    zonaSulRP,
    zonaSulJabaquara,
    zonaSulCapao,
    zonaSulCL,
    zonaLesteItaquera,
    zonaLesteMooca,
    zonaLestePenha,
    zonaLesteTatuape
}
