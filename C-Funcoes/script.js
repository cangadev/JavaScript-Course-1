console.log("===FUNÇÕES===")
function Soma(number1, number2){
    let resultado = number1 + number2;

    return resultado;
};
console.log(Soma(12, 4));


console.log("===Contar===")
function Contar(x, y) {
    var i
    if(x>y){
        for(i = y; i<=x; i++){
            console.log(i)
        }
    }
    else if(x<y){
        for(i = x; i<=y; i++){
            console.log(i)
        }
    }
    }
Contar(15, 10);

