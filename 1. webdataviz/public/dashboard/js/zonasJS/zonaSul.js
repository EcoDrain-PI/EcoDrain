let charts = [];

function obterDadosZS() {
  fetch(`/zonas/zonaSul`, { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('Erro na API');
      return response.json();
    })
    .then(dados => {
      console.log("Dados recebidos da Zona Sul:", dados);
      const agrupado = agruparPorBairro(dados);
      atualizarGraficos(agrupado);
    })
    .catch(error => {
      console.error("Erro ao obter dados da Zona Sul:", error);
    });
}

function agruparPorBairro(dados) {
  const grupos = {};

  dados.forEach(dado => {
    if (!grupos[dado.bairro]) {
      grupos[dado.bairro] = [];
    }
    grupos[dado.bairro].push({
      rua: dado.rua,
      altura_lixo: dado.altura_lixo
    });
  });

  return Object.entries(grupos).map(([bairro, niveis]) => ({
    bairro,
    niveis
  }));
}

function atualizarGraficos(grupos) {
  charts.forEach(c => c.destroy());
  charts = [];

  const canvasIds = [
    'zonaSulPrincipal',
    'zonaSulMock',
    'zonaSulMock2',
    'zonaSulMock3'
  ];

  grupos.slice(0, 4).forEach((registro, index) => {
    const ctx = document.getElementById(canvasIds[index]).getContext('2d');
    const labels = registro.niveis.map(n => n.rua);
    const dadosGrafico = registro.niveis.map(n => n.altura_lixo);
    const cores = dadosGrafico.map(nivel =>
      nivel >= 180 ? 'rgb(220, 20, 60)' :
      nivel >= 150 ? 'rgb(255, 200, 0)' :
      'rgb(62, 225, 120)'
    );

    const grafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nível do Lixo (cm)',
          data: dadosGrafico,
          backgroundColor: cores,
          borderColor: cores,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#ffffff' },
            grid: { color: 'rgba(255, 255, 255, 0.2)' }
          },
          x: {
            ticks: { color: '#ffffff' },
            grid: { color: 'rgba(255, 255, 255, 0.2)' }
          }
        },
        plugins: {
          legend: { labels: { color: '#ffffff' } },
          annotation: {
            annotations: {
              linhaAtencao: {
                type: 'line',
                yMin: 150,
                yMax: 150,
                borderColor: 'rgba(255, 205, 86, 0.7)',
                borderWidth: 2,
                label: {
                  content: 'Atenção',
                  enabled: true,
                  position: 'center',
                  font: { size: 12, weight: 'bold' },
                  yAdjust: -10
                }
              },
              linhaRisco: {
                type: 'line',
                yMin: 180,
                yMax: 180,
                borderColor: 'rgba(255, 99, 132, 0.7)',
                borderWidth: 2,
                label: {
                  content: 'Risco',
                  enabled: true,
                  position: 'center',
                  font: { size: 12, weight: 'bold' },
                  yAdjust: -10
                }
              }
            }
          }
        }
      }
    });

    charts.push(grafico);
  });
}

setInterval(obterDadosZS, 5000);