console.log("Hello world");

var Nome = "cangaDev";

let idade = 21;

let peso = 60.5;

let programador = true;

console.log(
    "Nome: ", Nome, 
    " idade: ",idade ,
    " Peso: ", peso, 
    " Programador: ", programador);

//=====================================

let Marcas = ["Adidas", "NIKE", "JORDAN", "CANGADEV"];
console.log(Marcas);
console.log(Marcas[3]);

let Aluno={
    nome: Marcas[3],
    idade: 21,
    peso: 60.5,
    programador: true,
}
console.log(Aluno)

//===MODULO-1 EXERCICIO-1

let endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
    };

    /*
    O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
    */

    console.log(
        "O usuário mora em ", endereco.cidade,
        " / ", endereco.uf,
        ", no bairro ", endereco.bairro,
        ", na rua", `"`, endereco.rua,`"`,
        " com nº ", endereco.numero
    )


