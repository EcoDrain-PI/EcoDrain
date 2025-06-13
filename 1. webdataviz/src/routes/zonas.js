var express = require("express");
var router = express.Router();

var zonaController = require("../controllers/zonaController");

router.get("/zonaLeste", function (req, res) {
  zonaController.zonaLeste(req, res);
});

router.get("/zonaNorte", function (req, res) {
  zonaController.zonaNorte(req, res);
});

router.get("/zonaOeste", function (req, res) {
  zonaController.zonaOeste(req, res);
});
router.get("/zonaSul", function (req, res) {
  zonaController.zonaSul(req, res);
});
router.get("/zonas", function (req, res) {
  zonaController.zonaSulCL(req, res);
});

router.get("/ultimas/:idBueiro", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;
