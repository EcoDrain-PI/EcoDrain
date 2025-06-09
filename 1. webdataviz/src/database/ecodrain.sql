create database EcoDrain;
use EcoDrain;

CREATE TABLE logradouro (
	idLogradouro INT NOT NULL ,
    estado CHAR(2) NOT NULL ,
    cidade VARCHAR(50) NOT NULL ,
    PRIMARY KEY (idlogradouro));

CREATE TABLE empresa (
    idEmpresa INT NOT NULL  AUTO_INCREMENT,
    nome VARCHAR(45)   ,
    cnpj CHAR(14)   ,
    email VARCHAR(64)   ,
    num_tel CHAR(11)   ,
    num_cel CHAR(11)   ,
    fklogradouro INT NOT NULL ,
    PRIMARY KEY (idEmpresa),
    FOREIGN KEY (fklogradouro) REFERENCES logradouro (idlogradouro)
  );

CREATE TABLE endereco (
	idEndereco INT NOT NULL AUTO_INCREMENT,
    fkEmpresa INT NOT NULL ,
    cep CHAR(8),
    nome_rua VARCHAR(100),
    bairro VARCHAR(45),
    zonas VARCHAR(10),
    PRIMARY KEY (idEndereco),
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
  );

CREATE TABLE bueiro (
	idBueiro INT NOT NULL AUTO_INCREMENT,
    tamanho DECIMAL(5,2) NOT NULL ,
    fkEndereco INT NOT NULL ,
    PRIMARY KEY (idBueiro),
    FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco)
  );

CREATE TABLE sensor (
	idSensor INT NOT NULL  AUTO_INCREMENT,
    data_instalacao DATE,
    fkBueiro INT NOT NULL,
    PRIMARY KEY (idSensor),
    FOREIGN KEY (fkBueiro) REFERENCES bueiro (idBueiro)
  );

CREATE TABLE lotacao (
    idLotacao INT NOT NULL  AUTO_INCREMENT,
    fkSensor INT,
    altura_lixo DECIMAL(10,2)   ,
    data_monitoramento TIMESTAMP   ,
    PRIMARY KEY (idLotacao, fkSensor),
	FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor)
  );

CREATE TABLE usuario (
    idUsuario INT NOT NULL  AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    senha VARCHAR(12) NOT NULL,
    email VARCHAR(64) NOT NULL,
    fkEmpresa INT,
    PRIMARY KEY (idUsuario),
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
  );

CREATE TABLE alerta (
	idAlerta INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(45) NOT NULL ,
    alertacol VARCHAR(45) ,
    fkLotacao INT NOT NULL ,
    fkSensor INT,
    PRIMARY KEY (idalerta, fkLotacao, fkSensor),
    FOREIGN KEY (fkLotacao , fkSensor) REFERENCES lotacao (idLotacao , fkSensor)
  );

-- SELECTS PARA A DASHBOARD
-- SELECT DO GRÁFICO DO NÍVEL DO LIXO
SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.bairro, e.zonas
FROM lotacao l
INNER JOIN sensor s ON l.fkSensor = s.idSensor
INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
INNER JOIN endereco e ON b.fkEndereco = e.idEndereco;

-- INSERTS PARA TESTE
-- Inserindo dados na tabela logradouro
INSERT INTO logradouro (idLogradouro, estado, cidade) VALUES
(1, 'SP', 'São Paulo'),
(2, 'RJ', 'Rio de Janeiro'),
(3, 'MG', 'Belo Horizonte'),
(4, 'RS', 'Porto Alegre');

-- Inserindo dados na tabela empresa
INSERT INTO empresa (idEmpresa, nome, cnpj, email, num_tel, num_cel, fklogradouro) VALUES
(1, 'Empresa A', '12345678000100', 'contato@empresaa.com', '1123456789', '11987654321', 1),
(2, 'Empresa B', '98765432000100', 'contato@empresab.com', '2134567890', '21987654321', 2),
(3, 'Empresa C', '45678912000100', 'contato@empresac.com', '3134567890', '31987654321', 3);

-- Inserindo dados na tabela endereco (com zonas Norte, Sul, Leste e Oeste)
INSERT INTO endereco (idEndereco, fkEmpresa, cep, nome_rua, bairro, zonas) VALUES
(1, 1, '12345678', 'Rua A', 'Santana', 'Norte'),
(2, 2, '23456789', 'Rua B', 'Vila Mariana', 'Sul'),
(3, 3, '34567890', 'Rua C', 'Itaquera', 'Leste'),
(4, 1, '34567890', 'Rua D', 'Carrão', 'Leste'),
(5, 2, '45678901', 'Rua E', 'Barra Funda', 'Oeste');

-- Inserindo dados na tabela bueiro
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco) VALUES
(1, 50.75, 1),
(2, 45.20, 2),
(3, 60.30, 3),
(4, 55.10, 4),
(5, 48.60, 5);

-- Inserindo dados na tabela sensor
INSERT INTO sensor (idSensor, data_instalacao, fkBueiro) VALUES
(1, '2025-05-01', 1),
(2, '2025-05-02', 2),
(3, '2025-05-03', 3),
(4, '2025-05-04', 4),
(5, '2025-05-05', 5);

-- Inserindo dados na tabela lotacao com altura_lixo entre 50 e 220
INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento) VALUES
(1, 1, 120.50, '2025-05-01 10:00:00'),
(2, 2, 150.75, '2025-05-02 11:00:00'),
(3, 3, 200.40, '2025-05-03 12:00:00'),
(4, 4, 180.80, '2025-05-04 13:00:00'),
(5, 5, 110.60, '2025-05-05 14:00:00');

-- Inserindo dados na tabela usuario
INSERT INTO usuario (idUsuario, nome, senha, email, fkEmpresa) VALUES
(1, 'João Silva', 'senha123', 'joao@empresaa.com', 1),
(2, 'Maria Oliveira', 'senha456', 'maria@empresab.com', 2),
(3, 'Pedro Souza', 'senha789', 'pedro@empresac.com', 3);

-- Inserindo dados na tabela alerta
INSERT INTO alerta (idAlerta, descricao, alertacol, fkLotacao, fkSensor) VALUES
(1, 'Alerta de Bueiro 1', 'Cor vermelho', 1, 1),
(2, 'Alerta de Bueiro 2', 'Cor amarelo', 2, 2),
(3, 'Alerta de Bueiro 3', 'Cor verde', 3, 3),
(4, 'Alerta de Bueiro 4', 'Cor laranja', 4, 4),
(5, 'Alerta de Bueiro 5', 'Cor azul', 5, 5);

-- desativa a foreing key e dá um truncate na tabela
SET foreign_key_checks = 0;
truncate lotacao;
SET foreign_key_checks = 1;