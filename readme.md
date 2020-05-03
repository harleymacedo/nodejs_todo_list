Para baixar pacotes do projeto execute: npm install

Banco de dados:
1. Crie um Banco de dados chamado todo_list
2. Execute os comandos sql abaixo
    create table tarefa(
        id SERIAL primary key,
        titulo varchar (100) not null,
        descricao varchar (1000) not null,
        estado boolean not null
    );
3. Insira alguns dados