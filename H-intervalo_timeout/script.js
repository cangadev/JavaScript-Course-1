//setInterval && setTimeOut

//SetInterval executa várias vezes um determinado script num intervalo de tempo
function Sms(){
   console.log("Ola2 Mundo!")
}

setInterval(Sms, 1000);


//SetTimout executa um script apenas uma vez, após um determinado tempo

setTimeout(function MyName(){
   console.log("Canga dev!")
}, 5000);