create database EcoDrain;

use EcoDrain;

CREATE TABLE endereco (
id int auto_increment primary key,
CEP char (8) not null,
nome_rua  varchar(100) NOT NULL,
posicaoX varchar(10),
posicaoY varchar(10),
bairro varchar(45),
num_bueiros int NOT NULL
);

create table sensor(
id INT primary key auto_increment);

create table bueiro(
id int auto_increment primary key,
tamanho_bueiro decimal(4,2) not null,
fkEndereco int, 
fkSensor int,
foreign key (fkEndereco) references endereco(id),
foreign key (fkSensor) references sensor (id)
);

create table lotacao(
id int auto_increment primary key,
nivel_lixo varchar(10) default 'Baixo' check(nivel_lixo in('Baixo','Médio','Alto')),
qtd_lixo decimal(4,2),
dt_monitoramento timestamp default current_timestamp,
fkBueiro int,	
foreign key(fkbueiro) references bueiro(id)
);


create table usuario (
id int auto_increment,
nome varchar(70),
senha varchar(30),
email varchar(45),
telefone varchar (14),
primary key(id)
);

INSERT INTO endereco (CEP, nome_rua, posicaoX, posicaoY, bairro, num_bueiros)
VALUES
('12345678', 'Rua das Palmeiras', '10', '20', 'Centro', 2),
('87654321', 'Avenida dos Lagos', '2', '7', 'Jardim Sul', 3),
('11223344', 'Travessa do Sol', '12', '10', 'Nova Esperança', 1);

INSERT INTO sensor (id)
VALUES 
(DEFAULT),
(DEFAULT),
(DEFAULT),
(DEFAULT),
(DEFAULT);

INSERT INTO bueiro (tamanho_bueiro, fkEndereco, fkSensor)
VALUES 
(35.50, 1, 1),
(40.00, 1, 2),
(28.75, 2, 3),
(33.20, 2, 4),
(29.80, 3, 5);

INSERT INTO usuario (nome, senha, email, telefone)
VALUES 
('João', 'senha123', 'joao@empresa.com', '(11)91234-5678'),
('Giovana', 'senha456', 'giovana@empresa.com', '(21)98765-4321'),
('Victor', 'senha789', 'victor@empresa.com', '(31)99887-6655');

-- Mostrando os bueiros com seus enderecos

select b.id as id_bueiro, b.tamanho_bueiro, e.nome_rua, e.bairro, e.CEP
from  bueiro b
inner join endereco e on b.fkEndereco = e.id;

-- bueiro com id do sensor
select b.id AS id_bueiro,  b.tamanho_bueiro, s.id AS id_sensor
from bueiro b
inner join sensor s on b.fkSensor = s.id;