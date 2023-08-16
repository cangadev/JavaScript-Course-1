
//FOR - WHILE

for(cont=1; cont<=50; cont++){
    console.log(cont)
}

//MODULO-1 EXERCICIO 2

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

console.log("Achar Valor primo")

   let valor=11
   let i
   var cont=0
   for(i=1; i<=valor; i++){
    
      if(valor%i==0){
       cont=cont + 1
      } 
      
   }
   if(cont<=2){
    console.log(`${valor} é primo`)
  }
  else{
    console.log(`${valor} não é primo`)
  }


  //WHILE
  let number = 0
  while(number<=10){
   console.log(number)
   number++
  }

  let numbe = 1000;
  while(numbe >= 50){
   console.log(numbe);
   numbe/=2
  }