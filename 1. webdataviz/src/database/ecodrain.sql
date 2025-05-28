create database EcoDrain;
use EcoDrain;

CREATE TABLE logradouro (
	idLogradouro INT NOT NULL ,
    estado CHAR(2) NOT NULL ,
    cidade VARCHAR(25) NOT NULL ,
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
    CONSTRAINT fk_empresa_logradouro1 FOREIGN KEY (fklogradouro) REFERENCES logradouro (idlogradouro)
  );

CREATE TABLE endereco (
	idEndereco INT NOT NULL AUTO_INCREMENT,
    fkEmpresa INT NOT NULL ,
    cep CHAR(8),
    nome_rua VARCHAR(100),
    bairro VARCHAR(45),
    zonas int NOT NULL check( zonas in(1, 2, 3, 4)),
    PRIMARY KEY (idEndereco),
    CONSTRAINT fk_endereco_empresa1 FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
    CONSTRAINT fk_endereco_endereco1 FOREIGN KEY (zonas) REFERENCES endereco (idEndereco)
  );

CREATE TABLE bueiro (
	idBueiro INT NOT NULL AUTO_INCREMENT,
    tamanho DECIMAL(5,2) NOT NULL ,
    fkEndereco INT NOT NULL ,
    PRIMARY KEY (idBueiro),
    INDEX fkEndereco (fkEndereco ASC) VISIBLE,
    CONSTRAINT bueiro_ibfk_1 FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco)
  );

CREATE TABLE sensor (
	idSensor INT NOT NULL  AUTO_INCREMENT,
    data_instalacao DATE,
    fkBueiro INT NOT NULL,
    PRIMARY KEY (idSensor),
    CONSTRAINT fk_sensor_bueiro1 FOREIGN KEY (fkBueiro) REFERENCES bueiro (idBueiro)
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
    CONSTRAINT fk_alerta_lotacao1 FOREIGN KEY (fkLotacao , fkSensor) REFERENCES lotacao (idLotacao , fkSensor)
  );

-- INSERTS PARA TESTE
INSERT INTO logradouro (idLogradouro, estado, cidade)
VALUES (1, 'SP', 'São Paulo');

INSERT INTO empresa (idEmpresa, nome, cnpj, email, num_tel, num_cel, fklogradouro)
VALUES (1, 'Empresa Exemplo', '12345678000199', 'empresa@exemplo.com', '1133445566', '11988887777', 1);

INSERT INTO endereco (idEndereco, fkEmpresa, cep, nome_rua, bairro, zonas)
VALUES (1, 1, '12345678', 'Rua Exemplo', 'Centro', 1);

INSERT INTO bueiro (idBueiro, tamanho, fkEndereco)
VALUES (1, 50.00, 1);

INSERT INTO sensor (idSensor, data_instalacao, fkBueiro)
VALUES (1, '2024-06-10', 1);

INSERT INTO lotacao (fkSensor, altura_lixo, data_monitoramento)
VALUES (1, 25.75, CURRENT_TIMESTAMP);

-- SELECTS PARA A DASHBOARD
-- SELECT DO GRÁFICO DO NÍVEL DO LIXO
SELECT  b.idBueiro, l.altura_lixo, l.data_monitoramento, e.nome_rua
FROM lotacao l
INNER JOIN sensor s ON l.fkSensor = s.idSensor
INNER JOIN bueiro b ON s.fkBueiro = b.idBueiro
INNER JOIN endereco e ON b.fkEndereco = e.idEndereco;

-- DESABILITA A FOREIGN KEY E DÁ UM TRUNCATE NA TABELA
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE lotacao;
SET FOREIGN_KEY_CHECKS = 1;