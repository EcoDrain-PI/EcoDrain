  create database ecodrain;
  use ecodrain;

  CREATE TABLE logradouro (
    idLogradouro INT NOT NULL ,
    estado CHAR(2) NOT NULL ,
    cidade VARCHAR(25) NOT NULL ,
    PRIMARY KEY (idlogradouro))
  ;


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
    data_instalacao DATE   ,
    fkBueiro INT NOT NULL ,
    PRIMARY KEY (idSensor),
    CONSTRAINT fk_sensor_bueiro1 FOREIGN KEY (fkBueiro) REFERENCES bueiro (idBueiro)
  );



  CREATE TABLE lotacao (
    idLotacao INT NOT NULL  AUTO_INCREMENT,
    fkSensor INT NOT NULL ,
    altura_lixo DECIMAL(10,2)   ,
    data_monitoramento TIMESTAMP   ,
    PRIMARY KEY (idLotacao, fkSensor),
    INDEX fkSensor (fkSensor ASC) VISIBLE,
    CONSTRAINT lotacao_ibfk_1
      FOREIGN KEY (fkSensor)
      REFERENCES sensor (idSensor)
  );



  CREATE TABLE usuario (
    idUsuario INT NOT NULL  AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL ,
    senha VARCHAR(12) NOT NULL ,
    email VARCHAR(64) NOT NULL ,
    fkEmpresa INT ,
    PRIMARY KEY (idUsuario),
    CONSTRAINT usuario_ibfk_1 FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
  );


  CREATE TABLE alerta (
    idAlerta INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(45) NOT NULL ,
    alertacol VARCHAR(45) ,
    fkLotacao INT NOT NULL ,
    fkSensor INT NOT NULL ,
    PRIMARY KEY (idalerta, fkLotacao, fkSensor),
    CONSTRAINT fk_alerta_lotacao1 FOREIGN KEY (fkLotacao , fkSensor) REFERENCES lotacao (idLotacao , fkSensor)
  );


  select * from usuario;