var alertas = [];

function obterdados(idMonitoramento) {
    fetch(`/medidas/tempo-real/${idMonitoramento}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idMonitoramento);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idMonitoramento} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idMonitoramento) {
    var alt = reposta[0].altura_do_Lixo

    var grauDeAviso = '';

    var limites = {
        atencao: 60,
        risco: 30
    };

    var classe_altura = 'cor-alerta '

    if (alt <= limites.atencao) {
        classe_temperatura = 'cor-alerta alerta-atencao';
        grauDeAviso = 'Alerta atencao'
        grauDeAvisoCor = 'cor-alerta alerta-atencao'
        exibirAlerta(temp, idMonitoramento, grauDeAviso, grauDeAvisoCor)
    } else if (alt <= limites.risco) {
        classe_temperatura = 'cor-alerta perigo-risco';
        grauDeAviso = 'Perigo risco'
        grauDeAvisoCor = 'cor-alerta perigo-risco'
        exibirAlerta(temp, idMonitoramento, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (document.getElementById(`altura_bueiro_${idMonitoramento}`) != null) {
        document.getElementById(`altura_bueiro_${idMonitoramento}`).innerHTML = alt + "cm";
    }

    if (document.getElementById(`card_${idMonitoramento}`)) {
        card = document.getElementById(`card_${idMonitoramento}`)
        card.className = classe_altura;
    }
}