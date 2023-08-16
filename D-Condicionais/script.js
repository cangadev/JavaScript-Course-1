console.log("===Condicionais===")

let age = 20;

if(age>= 18){
    console.log("Maior de idade")
}
else if(age<18 && age>0){
    console.log("Menor de idade")
}
else if(age<=0){
    console.log("Descrição inválida")
};


//SWITCH

function Escolher(sexo) {
    switch(sexo){
        case 'M':
            return "Masculino";
        case "F":
            return "Feminino";
        default:
            return "Outro"
    };
}

console.log(Escolher('M'))


