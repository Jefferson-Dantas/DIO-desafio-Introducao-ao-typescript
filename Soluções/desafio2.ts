// Como podemos melhorar o esse código usando TS? 

/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

enum profissoes {
    Padeiro,
    Atriz
};

interface Pessoas {
    nome: string;
    idade: number;
    profissao: "Atriz" | "Padeiro"
};

// Seguem abaixo algumas opções:

let pessoa1: {nome: "maria", idade: 29, profissao: profissoes} = {
    nome: "maria",
    idade: 29,
    profissao: profissoes.Atriz
};

let pessoa2: {nome: string, idade: number, profissao: "Padeiro" | "Atriz"} = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};

let pessoa3: Pessoas = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: "Padeiro"
}