create database db_resinarte;

use db_resinarte;

CREATE TABLE tb_usuarios (
  id_usuario int auto_increment primary key,
  nm_usuario varchar(50),
  ds_senha varchar(50)
);

create table tb_produtos(
id_produto int auto_increment primary key,
nm_produto varchar(200),
ds_produto varchar(500),
ds_categoria varchar(100),
qtd_produto int,
vl_preco decimal(18,2),
img_produto longblob,
id_usuario int,
foreign key (id_usuario) references tb_usuarios (id_usuario)
);

insert into tb_usuarios(nm_usuario, ds_senha)
values ('felipe', '020605');