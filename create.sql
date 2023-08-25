drop table diego.card_transaction;
create table diego.card_transaction (
	card_number text,
	description text,
	amount numeric,
	currency text,
	date timestamp
);

insert into diego.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Mercado Livre', 100, 'BRL', '2023-08-01T10:00:00');
insert into diego.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Amazon', 300, 'USD', '2023-08-01T10:00:00');
insert into diego.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Submarino', 50, 'BRL', '2023-08-01T10:00:00');
insert into diego.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Extra', 1000, 'BRL', '2023-07-01T10:00:00');
insert into diego.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Google', 50, 'USD', '2023-07-01T10:00:00');
