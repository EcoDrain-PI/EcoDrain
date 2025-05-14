var express = require("express");
var router = express.Router();

var bueiroController = require("../controllers/bueiroController");

router.get("/:empresaId", function (req, res) {
  bueiroController.buscarBueiroPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  bueiroController.cadastrar(req, res);
})

module.exports = router;