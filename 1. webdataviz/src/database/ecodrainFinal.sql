create database EcoDrain;
use EcoDrain;

CREATE TABLE logradouro (
  idlogradouro INT NOT NULL,
  estado CHAR(2) NOT NULL,
  cidade VARCHAR(25) NOT NULL,
  PRIMARY KEY (idlogradouro)
);

CREATE TABLE empresa (
  idEmpresa INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  cnpj CHAR(14) NOT NULL,
  email VARCHAR(64) NOT NULL,
  fklogradouro INT NOT NULL,
  PRIMARY KEY (idEmpresa),
  CONSTRAINT fk_empresa_logradouro1 FOREIGN KEY (fklogradouro) REFERENCES logradouro (idlogradouro)
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
  fkZona INT NOT NULL unique,
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
  fkEmpresa INT NOT NULL,
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


INSERT INTO logradouro (idlogradouro, estado, cidade)
VALUES (1, 'SP', 'São Paulo');

INSERT INTO empresa (idEmpresa, nome, cnpj, email, fklogradouro)
VALUES (1, 'EcoLimpeza', '12345678000195', 'contato@ecolimpeza.com', 1);

INSERT INTO zona (idZona, nome)
VALUES 
  (1, 'Norte'),
  (2, 'Sul'),
  (3, 'Leste'),
  (4, 'Oeste');
  
INSERT INTO endereco (idEndereco, fkEmpresa, cep, rua, bairro, fkZona)
VALUES 
  (1, 1, '01001000', 'Av. Paulista', 'Bela Vista', 2),
  (2, 1, '02468000', 'Rua das Flores', 'Santana', 1);

INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES 
  (1, 35.50, 1),
  (2, 42.75, 2);


INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES 
  (1, '2025-05-01', 1),
  (2, '2025-05-02', 2);

INSERT INTO lotacao (idLotacao, fkSensor, altura_lixo, data_monitoramento)
VALUES 
  (1, 1, 15.25, '2025-06-01 10:00:00'),
  (2, 2, 30.00, '2025-06-01 11:00:00');

INSERT INTO usuario (idUsuario, nome, senha, email, fkEmpresa)
VALUES 
  (1, 'João Silva', 'senha123', 'joao@ecolimpeza.com', 1),
  (2, 'Maria Souza', 'senha456', 'maria@ecolimpeza.com', 1);

INSERT INTO alerta (idalerta, descricao, fkLotacao, fkSensor)
VALUES 
  (1, 'ALTO', 2, 2),
  (2, 'MÉDIO', 1, 1);


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
        JOIN logradouro lg ON em.fklogradouro = lg.idlogradouro;