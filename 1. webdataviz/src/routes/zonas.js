var express = require("express");
var router = express.Router();

var zonaController = require("../controllers/zonaController");

router.get("/zonas", function (req, res) {
  zonaController.zonaNorte(req, res);
});


router.get("/zonas", function (req, res) {
  zonaController.zonaSulRP(req, res);
});
router.get("/zonas", function (req, res) {
  zonaController.zonaSulJabaquara(req, res);
});
router.get("/zonas", function (req, res) {
  zonaController.zonaSulCapao(req, res);
});
router.get("/zonas", function (req, res) {
  zonaController.zonaSulCL(req, res);
});

router.get("/zonas", function (req, res) {
  zonaController.zonaLesteItaquera(req, res);
});
router.get("/zonas", function (req, res) {
  zonaController.zonaLesteMooca(req, res);
});
router.get("/zonas", function (req, res) {
  zonaController.zonaLestePenha(req, res);
});
router.get("/zonas", function (req, res) {
  zonaController.zonaLesteTatuape(req, res);
});

router.get("/ultimas/:idBueiro", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;
