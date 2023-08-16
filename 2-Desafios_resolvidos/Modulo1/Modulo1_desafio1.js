
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
