create database ecodrain;
use ecodrain;

create table zona (
idZona int primary key auto_increment,
nome varchar(5) unique
);

insert into zona (nome) values 
('Norte'),
('Sul'),
('Leste'),
('Oeste');

create table endereco (
idEndereco int primary key auto_increment,
cep char(8),
nome_rua varchar(100),
posicao_x varchar(10),
posicao_y varchar(10),
num_bueiros int,
bairro varchar(45),
fkZona int,
foreign key (fkZona) references zona(idZona) 
);

create table empresa (
idEmpresa int primary key auto_increment,
nome varchar(45),
cnpj char(14),
email  varchar(64),
num_tel char (11),
num_cel char (11),
fkEndereco int,
codigoAtivacao varchar(10),
foreign key (fkEndereco) references endereco (idEndereco)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (50),
senha varchar(12),
email varchar  (64),
celular char (11),
fkEmpresa int,
foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table bueiro (
idBueiro int primary key auto_increment,
tamanho decimal (4,2),
fkEndereco int ,
foreign key (fkEndereco) references endereco (idEndereco)
);

create table sensor (
idSensor int primary key auto_increment,
data_instalacao date,
fkBueiro int,
foreign key (fkBueiro) references bueiro (idBueiro));

create table lotacao (
idLotacao int auto_increment,
fkSensor int ,
foreign key (fkSensor) references sensor (idSensor),
altura_lixo decimal (10,2),
data_monitoramento timestamp,
primary key (idLotacao, fkSensor));

create table alerta (
idAlerta int auto_increment,
fkLotacao int,
fkSensor int,
descricao varchar(5) check (descricao = 'Alerta' or descricao = 'Risco'), -- antigo nível lixo da tabela lotacao
foreign key (fkLotacao) references lotacao (idLotacao),
foreign key (fkSensor) references sensor (idSensor),
primary key (idAlerta, fkLotacao, fkSensor)
);

insert into empresa(nome, cnpj, codigoAtivacao)
values('Empresa 1', '12345678901234', 'ABCDE'),
('Empresa 2', '09876543210987', 'EDCBA');