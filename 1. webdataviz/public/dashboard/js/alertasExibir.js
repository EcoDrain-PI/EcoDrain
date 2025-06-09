var alertas = [];

function obterDadosGrafico(idBueiro) {
    fetch(`/medidas/tempo-real/${idBueiro}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idBueiro);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idBueiro} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idBueiro) {
    var alt = resposta[0].altura_do_Lixo

    var grauDeAviso = '';

    var limites = {
        atencao: 60,
        risco: 30
    };

    var classe_altura = 'cor-alerta '

    if (alt <= limites.atencao) {
        classe_altura = 'cor-alerta alerta-atencao';
        grauDeAviso = 'Alerta atencao'
        grauDeAvisoCor = 'cor-alerta alerta-atencao'
        exibirAlerta(alt, idBueiro, grauDeAviso, grauDeAvisoCor)
    } else if (alt <= limites.risco) {
        classe_altura = 'cor-alerta perigo-risco';
        grauDeAviso = 'Perigo risco'
        grauDeAvisoCor = 'cor-alerta perigo-risco'
        exibirAlerta(alt, idBueiro, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (document.getElementById(`altura_bueiro_${idBueiro}`) != null) {
        document.getElementById(`altura_bueiro_${idBueiro}`).innerHTML = alt + "cm";
    }

    if (document.getElementById(`card_${idBueiro}`)) {
        card = document.getElementById(`card_${idBueiro}`)
        card.className = classe_altura;
    }
}

function exibirAlerta(alt, idBueiro, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idBueiro == idBueiro);

    if (indice >= 0) {
        alertas[indice] = { idBueiro, alt, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idBueiro, alt, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(idBueiro) {
    alertas = alertas.filter(item => item.idBueiro != idBueiro);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idBueiro, alt, grauDeAviso, grauDeAvisoCor }) {

    var descricao = JSON.parse(sessionStorage.BUEIROS).find(item => item.id == idBueiro).descricao;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
            <small>Altura capturada: ${alt}°C.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.BUEIROS).forEach(item => {
        obterDadosGrafico(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}
