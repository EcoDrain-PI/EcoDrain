var express = require("express");
var router = express.Router();
const { executar } = require("../database/config");


var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idBueiro", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idBueiro", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})


router.get("/atencao", async (req, res) => {
  try {
    const resultado = await executar(`
      SELECT COUNT(*) AS atencao
      FROM lotacao
      WHERE altura_lixo <= 139 AND altura_lixo > 50
    `);
    res.json(resultado[0]);
  } catch (erro) {
    console.error("🛑 ERRO AO CONTAR ALERTAS DE ATENÇÃO:", erro); // 👈 Aqui loga o erro real
    res.status(500).json({ erro: "Erro ao contar alertas de atenção" });
  }
});

router.get("/risco", async (req, res) => {
  try {
    const resultado = await executar(
      `SELECT COUNT(*) AS risco FROM lotacao WHERE altura_lixo <= 50`
    );
    res.json(resultado[0]);
  } catch (erro) {
    console.error("ERRO AO CONTAR ALERTAS DE RISCO:", erro);
    res.status(500).json({ erro: "Erro ao contar alertas de risco" });
  }
});



module.exports = router;