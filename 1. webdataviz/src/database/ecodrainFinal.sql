create database EcoDrain;
use EcoDrain;
-- drop database EcoDrain;

CREATE TABLE EstadoCidade (
  idEstadoCidade INT NOT NULL,
  estado CHAR(2) NOT NULL,
  cidade VARCHAR(25) NOT NULL,
  PRIMARY KEY (idEstadoCidade)
);

CREATE TABLE empresa (
  idEmpresa INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  cnpj CHAR(14) NOT NULL,
  email VARCHAR(64) NOT NULL,
  fkEstadoCidade INT NOT NULL,
  PRIMARY KEY (idEmpresa),
  FOREIGN KEY (fkEstadoCidade) REFERENCES EstadoCidade (idEstadoCidade)
);

CREATE TABLE zona (
  idZona INT NOT NULL,
  nome VARCHAR(5) NULL,
  PRIMARY KEY (idZona)
);

CREATE TABLE endereco (
  idEndereco INT NOT NULL AUTO_INCREMENT,
  fkEmpresa INT NOT NULL,
  cep CHAR(8) NOT NULL,
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  fkZona INT NOT NULL,
  PRIMARY KEY (idEndereco),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
  FOREIGN KEY (fkZona) REFERENCES zona (idZona)
);

CREATE TABLE bueiro (
  idBueiro INT NOT NULL AUTO_INCREMENT,
  tamanho DECIMAL(5,2) NOT NULL,
  fkEndereco INT NOT NULL,
  PRIMARY KEY (idBueiro, fkEndereco),
  FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco)
);

CREATE TABLE sensor (
  idSensor INT NOT NULL AUTO_INCREMENT,
  data_instalacao DATE NOT NULL,
  fkBueiro INT NOT NULL,
  PRIMARY KEY (idSensor, fkBueiro),
  FOREIGN KEY (fkBueiro) REFERENCES bueiro (idBueiro)
);

CREATE TABLE lotacao (
  idLotacao INT NOT NULL AUTO_INCREMENT,
  fkSensor INT NOT NULL,
  altura_lixo DECIMAL(10,2) NOT NULL,
  data_monitoramento TIMESTAMP NOT NULL,
  PRIMARY KEY (idLotacao, fkSensor),
  FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor)
);

CREATE TABLE usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  senha VARCHAR(12) NOT NULL,
  email VARCHAR(64) NOT NULL,
  fkEmpresa INT NOT NULL DEFAULT 1,
  PRIMARY KEY (idUsuario),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);


CREATE TABLE alerta (
  idalerta INT NOT NULL,
  descricao VARCHAR(5) NOT NULL,
  fkLotacao INT NOT NULL,
  fkSensor INT NOT NULL,
  PRIMARY KEY (idalerta, fkLotacao, fkSensor),
  FOREIGN KEY (fkLotacao , fkSensor) REFERENCES lotacao (idLotacao , fkSensor)
);


INSERT INTO EstadoCidade (idEstadoCidade, estado, cidade)
VALUES (1, 'SP', 'São Paulo');

INSERT INTO empresa (idEmpresa, nome, cnpj, email, fkEstadoCidade)
VALUES (1, 'Sabesp', '12345678000195', 'contato@ecolimpeza.com', 1);

INSERT INTO zona (idZona, nome)
VALUES 
  (1, 'Norte'),
  (2, 'Sul'),
  (3, 'Leste'),
  (4, 'Oeste');
  
INSERT INTO endereco (idEndereco, fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, 1, '01001000', 'Avenida Jacu Pêssego', 'Itaquera', 3),
  (2, 1, '02468000', 'Rua Dr. José de Porciúncula', 'Jardim Helena', 3),
  (3, 1, '01001000', 'Rua das Flores', 'Santana', 1),
  (4, 1, '02468000', 'Avenida Tucuruvi', 'Tucuruvi', 1),
  (5, 1, '02468000', 'Avenida Dona Belmira Marin', 'Grajaú', 2),
  (6, 1, '02468000', 'Rua Iguatemi', 'Morumbi', 4),
  (7, 1, '03010000', 'Rua das Palmeiras', 'Mooca', 3),
  (8, 1, '04050000', 'Avenida Jabaquara', 'Saúde', 2);

-- MAIS 8 ENDEREÇOS SEM LOTACÃO
INSERT INTO endereco (fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, '05502000', 'Rua Alvarenga', 'Butantã', 4),
  (1, '03102000', 'Rua da Mooca', 'Mooca', 3),
  (1, '04101000', 'Rua Domingos de Morais', 'Vila Mariana', 2),
  (1, '05001000', 'Rua Clélia', 'Lapa', 4),
  (1, '02202000', 'Avenida Água Fria', 'Tucuruvi', 1),
  (1, '08032000', 'Rua São Teodoro', 'Itaquera', 3),
  (1, '04404000', 'Avenida Interlagos', 'Interlagos', 2),
  (1, '01153000', 'Rua Guaicurus', 'Lapa', 4);
  
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES 
  (1, 200, 1),
  (2, 200, 2),
  (3, 200, 3),
  (4, 200, 4),
  (5, 200, 5),
  (6, 200, 6),
  (7, 200, 7),
  (8, 200, 8),
  (9, 200, 9),
  (10, 200, 10),
  (11, 200, 11),
  (12, 200, 12),
  (13, 200, 13),
  (14, 200, 14),
  (15, 200, 15),
  (16, 200, 16);

INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES 
  (1, '2025-05-01', 1),
  (2, '2025-05-02', 2),
  (3, '2025-05-02', 3),
  (4, '2025-05-02', 4),
  (5, '2025-05-02', 5),
  (6, '2025-05-02', 6),
  (7, '2025-05-03', 7),
  (8, '2025-05-03', 8),
  (9, '2025-05-04', 9),
  (10, '2025-05-04', 10),
  (11, '2025-05-04', 11),
  (12, '2025-05-05', 12),
  (13, '2025-05-05', 13),
  (14, '2025-05-05', 14),
  (15, '2025-05-06', 15),
  (16, '2025-05-06', 16);

INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento)
VALUES 
  (1, 1, 191.20, '2025-06-01 10:00:00'),
  (2, 2, 181.00, '2025-06-01 11:00:00'),
  (3, 3, 166.40, '2025-06-01 11:00:00'),
  (4, 4, 158.45, '2025-06-01 11:00:00'),
  (5, 5, 80.45, '2025-06-01 11:00:00'),
  (6, 6, 110.13, '2025-06-01 11:00:00');
  
INSERT INTO usuario (idUsuario, nome, senha, email, fkEmpresa)
VALUES 
  (1, 'João Silva', 'senha123', 'joao@ecolimpeza.com', 1),
  (2, 'Maria Souza', 'senha456', 'maria@ecolimpeza.com', 1);

INSERT INTO alerta (idalerta, descricao, fkLotacao, fkSensor)
VALUES 
  (1, 'ALTO', 2, 2),
  (2, 'MÉDIO', 1, 1);

-- select do gráfico de nível de lotação por bairro
SELECT l.altura_lixo, e.bairro, z.nome AS zonasGrafico, lg.cidade, b.idBueiro, e.rua
FROM lotacao l
JOIN sensor s ON l.fkSensor = s.idSensor
JOIN bueiro b ON s.fkBueiro = b.idBueiro
JOIN endereco e ON b.fkEndereco = e.idEndereco
JOIN zona z ON e.fkZona = z.idZona
JOIN empresa em ON e.fkEmpresa = em.idEmpresa
JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade
ORDER BY idBueiro
LIMIT 8;

-- desativa a foreing key e dá um truncate na tabela
-- SET foreign_key_checks = 0;
-- truncate lotacao;
-- SET foreign_key_checks = 1;

-- Atualiza os registros da tabela lotacao para datas nas últimas 24 horas
UPDATE lotacao SET data_monitoramento = NOW() - INTERVAL 23 HOUR WHERE idLotacao = 1;
UPDATE lotacao SET data_monitoramento = NOW() - INTERVAL 20 HOUR WHERE idLotacao = 2;
UPDATE lotacao SET data_monitoramento = NOW() - INTERVAL 17 HOUR WHERE idLotacao = 3;
UPDATE lotacao SET data_monitoramento = NOW() - INTERVAL 14 HOUR WHERE idLotacao = 4;
UPDATE lotacao SET data_monitoramento = NOW() - INTERVAL 10 HOUR WHERE idLotacao = 5;
UPDATE lotacao SET data_monitoramento = NOW() - INTERVAL 5 HOUR WHERE idLotacao = 6;

-- Inserção das novas ruas na Zona Leste
INSERT INTO endereco (fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, '08567000', 'Rua das Violetas', 'Jardim Helena', 3),
  (1, '08544000', 'Rua Rio das Pedras', 'Itaquaquecetuba', 3),
  (1, '08430000', 'Rua do Sol', 'Guaianases', 3),
  (1, '03345000', 'Rua São José', 'Itaquera', 3),
  (1, '08550000', 'Rua das Orquídeas', 'Itaquera', 3);
  
-- Inserção de bueiros para os novos endereços
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES 
  (17, 200, 17),
  (18, 200, 18),
  (19, 200, 19),
  (20, 200, 20),
  (21, 200, 21);
  
-- Inserção de sensores para os novos bueiros
INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES 
  (17, '2025-06-10', 17),
  (18, '2025-06-11', 18),
  (19, '2025-06-12', 19),
  (20, '2025-06-13', 20),
  (21, '2025-06-14', 21);
  
-- Inserção de lotação (altura de lixo) para os novos sensores
INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento)
VALUES 
  (7, 17, 100.00, now()),
  (8, 18, 110.50, now()),
  (9, 19, 120.75, now()),
  (10, 20, 180.00, now()),
  (11, 21, 190.00, now());
  
-- Inserção de endereços para a Zona Norte (Altura de lixo abaixo de 150)
INSERT INTO endereco (fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, '02368000', 'Rua Bernardo Guimarães', 'Vila Mazzei', 1),
  (1, '02369000', 'Rua Itapeti', 'Vila Galvão', 1),
  (1, '02368000', 'Rua Vicente de Carvalho', 'Vila Progredior', 1),
  (1, '02368000', 'Rua João Barglini', 'Jardim São Paulo', 1);

-- Inserção de bueiros para os novos endereços da Zona Norte
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES 
  (22, 200, 22),
  (23, 200, 23),
  (24, 200, 24),
  (25, 200, 25);

-- Inserção de sensores para os novos bueiros da Zona Norte
INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES 
  (22, '2025-06-15', 22),
  (23, '2025-06-16', 23),
  (24, '2025-06-17', 24),
  (25, '2025-06-18', 25);

-- Inserção de lotação (altura de lixo abaixo de 150) para os novos sensores da Zona Norte
INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento)
VALUES 
  (12, 22, 120.00, now()),
  (13, 23, 130.00, now()),
  (14, 24, 140.00, now()),
  (15, 25, 135.00, now());

-- Inserção de endereços para a Zona Sul (Altura de lixo abaixo de 150)
INSERT INTO endereco (fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, '04849000', 'Rua Cândido Motta', 'Campo Limpo', 2),
  (1, '04849000', 'Rua Trajano', 'Vila Progresso', 2),
  (1, '04718000', 'Rua Frei Caneca', 'Jardim São Luiz', 2),
  (1, '04287000', 'Rua Joaquim Pimentel', 'Saúde', 2);

-- Inserção de bueiros para os novos endereços da Zona Sul
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES 
  (26, 200, 26),
  (27, 200, 27),
  (28, 200, 28),
  (29, 200, 29);

-- Inserção de sensores para os novos bueiros da Zona Sul
INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES 
  (26, '2025-06-19', 26),
  (27, '2025-06-20', 27),
  (28, '2025-06-21', 28),
  (29, '2025-06-22', 29);

-- Inserção de lotação (altura de lixo abaixo de 150) para os novos sensores da Zona Sul
INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento)
VALUES 
  (16, 26, 120.50, now()),
  (17, 27, 110.00, now()),
  (18, 28, 130.00, now()),
  (19, 29, 140.00, now());

-- Inserção de endereços para a Zona Oeste (Altura de lixo abaixo de 150)
INSERT INTO endereco (fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, '05065000', 'Rua Francisco Teles', 'Lapa', 4),
  (1, '05110000', 'Rua do Manifesto', 'Vila Progredior', 4),
  (1, '05354000', 'Rua João Leme', 'Vila Leopoldina', 4),
  (1, '05137000', 'Rua Alexandre Dumas', 'Vila Progredior', 4);

-- Inserção de bueiros para os novos endereços da Zona Oeste
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES 
  (30, 200, 30),
  (31, 200, 31),
  (32, 200, 32),
  (33, 200, 33);

-- Inserção de sensores para os novos bueiros da Zona Oeste
INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES 
  (30, '2025-06-23', 30),
  (31, '2025-06-24', 31),
  (32, '2025-06-25', 32),
  (33, '2025-06-26', 33);

-- Inserção de lotação (altura de lixo abaixo de 150) para os novos sensores da Zona Oeste
INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento)
VALUES 
  (20, 30, 120.75, now()),
  (21, 31, 130.00, now()),
  (22, 32, 140.25, now()),
  (23, 33, 145.50, now());