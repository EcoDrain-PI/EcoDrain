var express = require("express");
var router = express.Router();

var bueiroController = require("../controllers/bueiroController");

router.get("/empresa/:empresaId", function (req, res) {
  bueiroController.buscarBueiroPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  bueiroController.cadastrar(req, res);
})

router.get("/contarBueiro", function(req, res){
  bueiroController.contarBueiro(req, res)
})
module.exports = router;