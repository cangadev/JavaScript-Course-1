//===MODULO-1 EXERCICIO-2

function Pares(inicialNumber, finalNumber){
    console.log("Exibir numeros pares no intervalo de ", inicialNumber, " até ", finalNumber)
    let i
    for(i=inicialNumber; i<=finalNumber; i++){
         if(i%2==0){
            console.log(i)
         }
    }
}
Pares(1, 10)
