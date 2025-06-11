let myChart;
  // Função chamada ao carregar a página para obter e processar os dados
  function obterDadosRio(){
    fetch(`/zonas/zonas`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta.reverse(); // Invertendo os dados para plotar da esquerda para a direita

          plotarGrafico(resposta);
        });
      } else {
        console.error('Nenhum dado encontrado ou erro na API');
      }
    })
      .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
  }

  // Função para plotar o gráfico com os dados
  function plotarGrafico(dados, idBueiro) {

    if (myChart) {
      myChart.destroy();
    }
    console.log('Iniciando plotagem do gráfico...');

    let labels = [];
    let dadosGrafico = [];
    let zonas = [];

    // Processando os dados
    for (let i = 0; i < dados.length; i++) {
      labels.push(dados[i].bairro);
      dadosGrafico.push(dados[i].altura_lixo);
      zonas.push(dados[i].zonas);
    }

    // Definindo a cor das barras com base no nível do lixo
    const backgroundColors = dadosGrafico.map(nivel => {
      return nivel > 180 ? 'rgba(255, 99, 132, 0.7)' : 'rgba(54, 162, 235, 0.7)';  // Vermelho para > 180, azul para <= 180
    });

    const itaquera = document.getElementById('zonaLesteItaquera').getContext('2d');
    const mooca = document.getElementById('zonaLesteMooca').getContext('2d');
    const penha = document.getElementById('zonaLestePenha').getContext('2d');
    const tatuape = document.getElementById('zonaLesteTatuape').getContext('2d');

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nível do Lixo (cm)',
          data: dadosGrafico,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors.map(c => c.replace('0.7', '1')),
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
          tooltip: {
            callbacks: {
              afterLabel: function (context) {
                return 'Zona: ' + zonas[context.dataIndex];
              }
            }
          },
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
                  position: 'center',
                  enabled: true,
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
                  position: 'center',
                  enabled: true,
                  font: { size: 12, weight: 'bold' },
                  yAdjust: -10
                }
              }
            }
          }
        }
      }
    };

    myChart = new Chart(itaquera, mooca, penha, tatuape, config);

    setTimeout(() => atualizarGrafico(idBueiro, dados, myChart), 5000);
  }

  // Função para atualizar o gráfico em tempo real
  function atualizarGrafico(idBueiro, dados, myChart) {
    fetch(`/medidas/tempo-real/${idBueiro}`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
        response.json().then(function (novoRegistro) {
          obterDadosZN(idBueiro);  // Atualiza os dados do gráfico
          console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);

          // Verifica se há dados novos para atualizar o gráfico
          if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
            console.log("---------------------------------------------------------------")
            console.log("Como não há dados novos para captura, o gráfico não atualizará.")
          } else {
            dados.labels.shift();  // Remove o primeiro
            dados.labels.push(novoRegistro[0].momento_grafico); // Adiciona o novo dado
            dadosGrafico.shift();  // Remove o primeiro nível de lixo
            dadosGrafico.push(novoRegistro[0].altura_lixo); // Adiciona o novo nível de lixo

            // Atualiza o gráfico com novos dados
            myChart.update();
          }

          // Atualização do gráfico a cada 2 segundos
          setTimeout(() => atualizarGrafico(idBueiro, dados, myChart), 2000);
        });
      } else {
        console.error('Nenhum dado encontrado ou erro na API');
        setTimeout(() => atualizarGrafico(idBueiro, dados, myChart), 2000);
      }
    })
      .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
  }

 