create database blog;

create table users (
	id serial primary key,
  	nome text not null,
  	email text not null unique,
  	senha text not null
);
