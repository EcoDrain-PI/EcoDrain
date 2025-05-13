create database ecodrain;
use ecodrain;

CREATE TABLE endereco (
idRua int auto_increment primary key,
CEP char (8) not null,
nome_rua  varchar(100) NOT NULL,
posicao varchar(10), -- matriz {linha, coluna} A1, B2, C3...
num_bueiros int NOT NULL
);

create table bueiro(
idBueiro int auto_increment primary key,
tamanho_bueiro decimal(4,2) not null,
fk_endereco int, 
foreign key (fk_endereco) references endereco(idRua)
);

create table lotacao(
idLotacao int auto_increment primary key,
nivel_lixo varchar(10) default 'Baixo' check(nivel_lixo in('Baixo','Médio','Alto')),
qtd_lixo decimal(4,2),
data_monitoramento timestamp default current_timestamp,
fkbueiro int,	
foreign key(fkbueiro) references bueiro(idBueiro)
);

select * from lotacao;

create table usuario (
idUsuario int auto_increment,
nome_empresa varchar(70),
senha varchar(30),
email varchar(45),
telefone varchar (14),
primary key(idUsuario)
);