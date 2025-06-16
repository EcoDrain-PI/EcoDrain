let charts = [];

function obterDadosZL() {
  fetch(`/zonas/zonaLeste`, { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('Erro na API');
      return response.json();
    })
    .then(dados => {
      console.log("Dados recebidos:", dados);
      atualizarGraficos(dados);
    })
    .catch(error => {
      console.error("Erro ao obter dados da zona Leste:", error);
    });
}

function atualizarGraficos(dados) {
  charts.forEach(c => c.destroy());
  charts = [];

  const canvasIds = [
    'zonaLestePrincipal',
    'zonaLesteMock',
    'zonaLesteMock2',
    'zonaLesteMock3'
  ];

  const grupos = agruparPorBairro(dados);

  grupos.forEach((grupo, index) => {
    if (index < canvasIds.length) {
      const ctx = document.getElementById(canvasIds[index]).getContext('2d');
      const ruas = grupo.map(d => d.rua);
      const niveis = grupo.map(d => d.altura_lixo);
      const cores = niveis.map(n =>
        n >= 180 ? 'rgb(220, 20, 60)' :
          n >= 150 ? 'rgb(255, 200, 0)' :
            'rgb(62, 225, 120)'
      );

      const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ruas,
          datasets: [{
            label: 'Nível do Lixo (cm)',
            data: niveis,
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
    }
  });
}

function agruparPorBairro(dados) {
  const grupos = {};
  dados.forEach(item => {
    if (!grupos[item.bairro]) {
      grupos[item.bairro] = [];
    }
    grupos[item.bairro].push(item);
  });
  return Object.values(grupos).slice(0, 4);
}

setInterval(obterDadosZL, 5000);