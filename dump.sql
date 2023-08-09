create database blog;

create table users (
	id serial primary key,
	name text not null,
	email text not null unique,
	password text not null
);


create table posts (
	id serial primary key,
	user_id integer references users(id),
	title text not null,
	subtitle text not null,
	post text not null,
	created_at TIMESTAMPTZ DEFAULT Now()
);
