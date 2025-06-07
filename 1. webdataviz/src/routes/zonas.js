var express = require("express");
var router = express.Router();

var zonaController = require("../controllers/zonaController");

router.get("/zonas", function (req, res) {
  zonaController.zonaNorte(req, res);
});

router.get("/ultimas/:idBueiro", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;