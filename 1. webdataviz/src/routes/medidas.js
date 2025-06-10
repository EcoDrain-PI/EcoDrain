// src/routes/medidas.js

var express = require("express");
var router = express.Router();
// const { executar } = require("../database/config"); // Não é mais necessário importar 'executar' aqui!


var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idBueiro", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idBueiro", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

// Rota para o KPI de Atenção (CONTADOR TOTAL) - Agora chama o Controller
router.get("/atencao", function (req, res) {
    medidaController.buscarAlertasAtencaoTotal(req, res); // Chama a função no controller
});

// Rota dinâmica para o GRÁFICO DE ATENÇÃO POR PERÍODO
router.get("/atencao/periodo/:filtro", function (req, res) {
    medidaController.buscarAlertasAtencaoPorPeriodo(req, res);
});

// Rota para o KPI de Risco (CONTADOR TOTAL) - Agora chama o Controller
router.get("/risco", function (req, res) {
    medidaController.buscarAlertasRiscoTotal(req, res); // Chama a função no controller
});

router.get("/risco/periodo/:filtro", function (req, res) {
  medidaController.buscarAlertasRiscoPorPeriodo(req, res);
});


module.exports = router;
medidaController.js
