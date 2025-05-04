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