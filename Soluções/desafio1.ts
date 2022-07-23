/*let employee = {};
employee.code = 10;
employee.name = "John";*/


// Solução 01

interface Funcionario {
    matricula: 10,
    nome: "John"
}

let employee: Funcionario = {
    matricula: 10,
    nome: "John"
}

// Solução 02

let employee2: {matricula: 10, nome: "John"} = {
    matricula: 10,
    nome: "John"
}