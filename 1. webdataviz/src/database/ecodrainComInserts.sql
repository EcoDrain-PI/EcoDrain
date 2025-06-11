-- drop database Ecodrain;
create database EcoDrain;
use EcoDrain;

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
  CONSTRAINT fk_empresa_EstadoCidade1 FOREIGN KEY (fkEstadoCidade) REFERENCES EstadoCidade (idEstadoCidade)
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
  CONSTRAINT fk_endereco_empresa1 FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa), 
CONSTRAINT fk_endereco_zona1 FOREIGN KEY (fkZona) REFERENCES zona (idZona)
);

CREATE TABLE bueiro (
  idBueiro INT NOT NULL AUTO_INCREMENT,
  tamanho DECIMAL(5,2) NOT NULL,
  fkEndereco INT NOT NULL,
  PRIMARY KEY (idBueiro, fkEndereco),
  CONSTRAINT fk_bueiro_endereco1 FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco)
);

CREATE TABLE sensor (
  idSensor INT NOT NULL AUTO_INCREMENT,
  data_instalacao DATE NOT NULL,
  fkBueiro INT NOT NULL,
  PRIMARY KEY (idSensor, fkBueiro),
  CONSTRAINT fk_sensor_bueiro1 FOREIGN KEY (fkBueiro) REFERENCES bueiro (idBueiro)
);

CREATE TABLE lotacao (
  idLotacao INT NOT NULL AUTO_INCREMENT,
  fkSensor INT NOT NULL,
  altura_lixo DECIMAL(10,2) NOT NULL,
  data_monitoramento TIMESTAMP NOT NULL,
  PRIMARY KEY (idLotacao, fkSensor),
  CONSTRAINT lotacao_ibfk_1
    FOREIGN KEY (fkSensor)
    REFERENCES sensor (idSensor)
);

CREATE TABLE usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  senha VARCHAR(12) NOT NULL,
  email VARCHAR(64) NOT NULL,
  fkEmpresa INT,
  PRIMARY KEY (idUsuario),
  CONSTRAINT usuario_ibfk_1
    FOREIGN KEY (fkEmpresa)
    REFERENCES empresa (idEmpresa)
);


CREATE TABLE alerta (
  idalerta INT NOT NULL,
  descricao VARCHAR(5) NOT NULL,
  fkLotacao INT NOT NULL,
  fkSensor INT NOT NULL,
  PRIMARY KEY (idalerta, fkLotacao, fkSensor),
  CONSTRAINT fk_alerta_lotacao1
    FOREIGN KEY (fkLotacao , fkSensor)
    REFERENCES lotacao (idLotacao , fkSensor)
);

INSERT INTO EstadoCidade (idEstadoCidade, estado, cidade) VALUES
-- Zona Leste: 
(1, 'SP', 'São Paulo'),
(2, 'SP', 'Mogi das Cruzes'),
(3, 'SP', 'Suzano'),
(4, 'SP', 'Guarulhos'),

-- Zona Oeste
(5, 'SP', 'São José do Rio Preto'),
(6, 'SP', 'Registro'),
(7, 'SP', 'Dracena'),
(8, 'SP', 'Votuporanga'),
(9, 'SP', 'Cananéia'),
(10, 'SP', 'Suzano'),
(11, 'SP', 'Presidente Prudente'),
(12, 'SP', 'São José do Rio Preto'),
(13, 'SP', 'Registro'),
(14, 'SP', 'Dracena'),
(15, 'SP', 'Votuporanga'),
(16, 'SP', 'Cananéia');

-- Inserindo empresa
INSERT INTO empresa (idEmpresa, nome, cnpj, email, fkEstadoCidade)
VALUES (1, 'EcoLimpeza', '12345678000195', 'contato@ecolimpeza.com', 1);


-- Inserindo zonas
INSERT INTO zona (idZona, nome)
VALUES 
  (1, 'Norte'),
  (2, 'Sul'),
  (3, 'Leste'),
  (4, 'Oeste');
  
-- Inserindo endereços
INSERT INTO endereco (idEndereco, fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, 1, '01001000', 'Av. Paulista', 'Bela Vista', 2),
  (2, 1, '02468000', 'Rua das Flores', 'Santana', 1);

-- Inserindo bueiros
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES 
  (1, 35.50, 1),
  (2, 42.75, 2);

-- Inserindo sensores
INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES 
  (1, '2025-05-01', 1),
  (2, '2025-05-02', 2);

-- Inserindo lotações
INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento)
VALUES 
  (1, 1, 15.25, '2025-06-01 10:00:00'),
  (2, 2, 30.00, '2025-06-01 11:00:00');

-- Inserindo usuários
INSERT INTO usuario (idUsuario, nome, senha, email, fkEmpresa)
VALUES 
  (1, 'João Silva', 'senha123', 'joao@ecolimpeza.com', 1),
  (2, 'Maria Souza', 'senha456', 'maria@ecolimpeza.com', 1);

-- Inserindo alertas
INSERT INTO alerta (idalerta, descricao, fkLotacao, fkSensor)
VALUES 
  (1, 'ALTO', 2, 2),
  (2, 'MÉDIO', 1, 1);
SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.bairro, z.nome
    FROM lotacao l
    INNER JOIN sensor s ON l.fkSensor = s.idSensor
    INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
    INNER JOIN endereco e ON b.fkEndereco = e.idEndereco
    INNER JOIN zona z ON e.fkZona = z.idZona;

INSERT INTO lotacao (fkSensor, altura_lixo, data_monitoramento) VALUES
(2, 200.40, '2025-05-03 12:00:00'),
(1, 180.80, '2025-05-04 13:00:00');

INSERT INTO lotacao (fkSensor, altura_lixo, data_monitoramento) VALUES
(2, 160.60, '2025-05-05 14:00:00');


-- Novos EstadoCidades (cidades novas de cada zona do estado)


select * from endereco;

-- Novos endereços (um por cidade/EstadoCidade diferente), ligados à empresa 1
INSERT INTO endereco (idEndereco, fkEmpresa, cep, rua, bairro, fkZona) VALUES
(3, 1, '08710000', 'Rua Ipiranga', 'Jundiapeba', 3),  -- Mogi das Cruzes, Leste
(4, 1, '08690000', 'Av. Brasil', 'Jardim Monte Cristo', 3), -- Suzano, Leste
(5, 1, '19010000', 'Rua Tenente Nicolau Maffei', 'Jardim Aviação', 4), -- Pres. Prudente, Oeste
(6, 1, '15010000', 'Rua Bernardino de Campos', 'Boa Vista', 1), -- SJ do Rio Preto, Norte
(7, 1, '11900000', 'Av. Clara Gianotti', 'Vila Tupy', 2), -- Registro, Sul
(8, 1, '17900000', 'Rua Marechal Deodoro', 'Jardim Kennedy', 4), -- Dracena, Oeste
(9, 1, '15500000', 'Av. Wilson de Souza Foz', 'Jardim Simonsen', 1), -- Votuporanga, Norte
(10, 1, '11990000', 'Rua da Praia', 'Itapitangui', 2); -- Cananéia, Sul

-- Novos bueiros (um por novo endereço, IDs 3 a 10)
INSERT INTO bueiro (idBueiro, tamanho, fkEndereco) VALUES
(3, 38.25, 3),
(4, 40.00, 4),
(5, 45.75, 5),
(6, 36.80, 6),
(7, 39.50, 7),
(8, 42.00, 8),
(9, 43.30, 9),
(10, 37.60, 10);

-- Novos sensores (um por bueiro novo, IDs 3 a 10)
INSERT INTO sensor (idSensor, data_instalacao, fkBueiro) VALUES
(3, '2025-05-10', 3),
(4, '2025-05-10', 4),
(5, '2025-05-11', 5),
(6, '2025-05-11', 6),
(7, '2025-05-12', 7),
(8, '2025-05-12', 8),
(9, '2025-05-13', 9),
(10, '2025-05-13', 10);

-- Novas lotações (altura_lixo ≤ 200.00)
INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento) VALUES
(3, 3, 75.20, '2025-06-02 09:00:00'),
(4, 4, 123.45, '2025-06-02 10:30:00'),
(5, 5, 98.75, '2025-06-02 11:45:00'),
(6, 6, 110.60, '2025-06-02 12:00:00'),
(7, 7, 89.90, '2025-06-02 13:15:00'),
(8, 8, 140.25, '2025-06-02 14:00:00'),
(9, 9, 199.99, '2025-06-02 14:45:00'),
(10, 10, 100.00, '2025-06-02 15:30:00');

-- Novos alertas correspondentes às novas lotações
INSERT INTO alerta (idalerta, descricao, fkLotacao, fkSensor) VALUES
(3, 'MÉDIO', 3, 3),
(4, 'ALTO', 4, 4),
(5, 'ALTO', 5, 5),
(6, 'MÉDIO', 6, 6),
(7, 'BAIXO', 7, 7),
(8, 'MÉDIO', 8, 8),
(9, 'ALTO', 9, 9),
(10, 'BAIXO', 10, 10);

select * from alerta;

select * from usuario;
select * from sensor;
SELECT 
        l.altura_lixo,
        e.bairro,
        z.nome AS zona,
        lg.cidade
        FROM lotacao l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN bueiro b ON s.fkBueiro = b.idBueiro
        JOIN endereco e ON b.fkEndereco = e.idEndereco
        JOIN zona z ON e.fkZona = z.idZona
        JOIN empresa em ON e.fkEmpresa = em.idEmpresa
        JOIN EstadoCidade lg ON em.fkEstadoCidade = lg.idEstadoCidade;
        
        
        
        
select l.altura_lixo
from lotacao l
join sensor s on s.idSensor = l.fkSensor
join bueiro b on b.idBueiro = s.fkBueiro
join endereco e on e.idEndereco = b.fkEndereco;