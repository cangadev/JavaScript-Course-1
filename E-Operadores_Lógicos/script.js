
console.log("==Operadores-Lógicos==");
// AND, OR, NOT

console.log(`Operador AND "&&"`)

let cidadao = {
    idade: 18,
    bilhete: true
}

if(cidadao.idade>=18 && cidadao.bilhete == true){
    console.log("RES: Vc já Pode votar");
}

console.log(`Operador OR "||"`)

let tecs = {
    desc: "REACTJS"
};

if(tecs.desc=="REACTJS" || tecs.desc=="NODEJS"){
    console.log("RES: You have ability to worker on our company");
}

console.log(`Operador NOT "!="`)

let profission = "nurse";
if(profission != "Programmer"){
    console.log(`Profissão: ${profission} RES: Não há motivo pra dormir tarde`);
}
