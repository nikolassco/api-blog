create database blog;

create table users (
	id serial primary key,
  	name text not null,
  	email text not null unique,
  	password text not null
);
