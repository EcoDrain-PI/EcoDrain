var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idBueiro", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idBueiro", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/atencao", async function (req, res) {
  try {
    const [linhas] = await db.execute(`
      SELECT COUNT(*) AS atencao
      FROM lotacao
      WHERE altura_lixo <= 139 AND altura_lixo > 50
    `);
    res.json(linhas[0]);
  } catch (erro) {
    console.error("ERRO AO CONTAR ALERTAS:", erro);
    res.status(500).json({ erro: "Erro ao contar alertas" });
  }
});
router.get("/risco", async function (req, res) {
  try {
    const [linhas] = await db.execute(`
      SELECT COUNT(*) AS risco
      FROM lotacao
      WHERE altura_lixo <= 50
    `);
    res.json(linhas[0]);
  } catch (erro) {
    console.error("ERRO AO CONTAR ALERTAS DE RISCO:", erro);
    res.status(500).json({ erro: "Erro ao contar alertas de risco" });
  }
});

module.exports = router;