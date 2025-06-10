// src/controllers/medidaController.js

var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idBueiro = req.params.idBueiro;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idBueiro, limite_linhas).then(function (resultado) {
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

// Função para buscar alertas de atenção por período (para o gráfico)
async function buscarAlertasAtencaoPorPeriodo(req, res) {
    const filtro = req.params.filtro; // '1h', '24h', '1w'
    console.log(`Buscando alertas de atenção para o período: ${filtro}`);

    if (!["1h", "24h", "1w"].includes(filtro)) {
        return res.status(400).json({ error: "Filtro de período inválido." });
    }

    try {
        const resultado = await medidaModel.buscarAlertasAtencaoPorPeriodoDB(filtro);

        if (resultado.length > 0) {
            res.json({ atencao: resultado[0].atencao });
        } else {
            res.json({ atencao: 0 });
        }
    } catch (erro) {
        console.error(`Erro ao buscar alertas de atenção para ${filtro}:`, erro);
        res.status(500).json({ error: "Erro interno do servidor ao buscar alertas de atenção." });
    }
}

// --- FUNÇÃO PARA O KPI DE ATENÇÃO (Contador Total) - AGORA CHAMA O MODEL ---
async function buscarAlertasAtencaoTotal(req, res) {
    console.log("Buscando total de alertas de atenção para o KPI principal.");
    try {
        const resultado = await medidaModel.buscarAlertasAtencaoTotalDB(); // Chama o Model
        if (resultado.length > 0) {
            res.json(resultado[0]);
        } else {
            res.json({ atencao: 0 });
        }
    } catch (erro) {
        console.error("ERRO AO CONTAR ALERTAS DE ATENÇÃO (controller):", erro);
        res.status(500).json({ erro: "Erro ao contar alertas de atenção" });
    }
}

// --- FUNÇÃO PARA O KPI DE RISCO (Contador Total) - AGORA CHAMA O MODEL ---
async function buscarAlertasRiscoTotal(req, res) {
    console.log("Buscando total de alertas de risco para o KPI principal.");
    try {
        const resultado = await medidaModel.buscarAlertasRiscoTotalDB(); // Chama o Model
        if (resultado.length > 0) {
            res.json(resultado[0]);
        } else {
            res.json({ risco: 0 });
        }
    } catch (erro) {
        console.error("ERRO AO CONTAR ALERTAS DE RISCO (controller):", erro);
        res.status(500).json({ erro: "Erro ao contar alertas de risco" });
    }
}

async function buscarAlertasRiscoPorPeriodo(req, res) {
  const filtro = req.params.filtro;

  if (!["1h", "24h", "1w"].includes(filtro)) {
    return res.status(400).json({ error: "Filtro de período inválido." });
  }

  try {
    const resultado = await medidaModel.buscarAlertasRiscoPorPeriodoDB(filtro);

    if (resultado.length > 0) {
      res.json({ risco: resultado[0].risco });
    } else {
      res.json({ risco: 0 });
    }
  } catch (erro) {
    console.error(`Erro ao buscar alertas de risco para ${filtro}:`, erro);
    res.status(500).json({ error: "Erro interno ao buscar alertas de risco." });
  }
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarAlertasAtencaoPorPeriodo, // Função para o filtro do gráfico
    buscarAlertasAtencaoTotal,      // Função para o KPI de atenção
    buscarAlertasRiscoTotal,         // Função para o KPI de risco
    buscarAlertasRiscoPorPeriodo
}
