function obterDadosZN() {
  fetch(`/zonas/zonaNorte`, { cache: 'no-store' })
    .then(response => {
      if (response.ok) {
        response.json().then(dados => {
          console.log("Dados recebidos da Zona Norte:", dados);
          plotarGraficos(dados);
        });
      } else {
        console.error("Erro na resposta da API Zona Norte");
      }
    })
    .catch(error => {
      console.error("Erro ao obter dados da Zona Norte:", error);
    });
}

function plotarGraficos(listaDados) {
  const grupos = agruparPorBairro(listaDados);
  const canvasIds = [
    "zonaNortePrincipal",
    "zonaNorteMock",
    "zonaNorteMock2",
    "zonaNorteMock3"
  ];

  grupos.forEach((grupo, index) => {
    if (index < canvasIds.length) {
      const ctx = document.getElementById(canvasIds[index]).getContext('2d');
      const ruas = grupo.map(d => d.rua);
      const niveis = grupo.map(d => d.altura_lixo);
      const cores = niveis.map(n => n >= 180 ? 'rgb(220, 20, 60)' :
                            n >= 150 ? 'rgb(255, 200, 0)' :
                            'rgb(62, 225, 120)');

      new Chart(ctx, {
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
        options: getChartOptions()
      });
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

function getChartOptions() {
  return {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.2)' }
      },
      x: {
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.2)' }
      }
    },
    plugins: {
      legend: { labels: { color: '#fff' } },
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
              yAdjust: -10,
              font: { size: 12, weight: 'bold' }
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
              yAdjust: -10,
              font: { size: 12, weight: 'bold' }
            }
          }
        }
      }
    }
  };
}

setInterval(obterDadosZN, 5000);