let Lista = document.querySelector("#ulList")

var nomes = ["Diego", "Gabriel", "Lucas"];

function renderizar(){
    for(todo of nomes){
    let elementList = document.createElement('li');
    let Texto = document.createTextNode(todo)

    elementList.appendChild(Texto)
    Lista.appendChild(elementList)
}
}
renderizar()

/*
function renderizar(nomes){
    let elementList = document.createElement('li');
    let Texto = document.createTextNode(nomes)

    elementList.appendChild(Texto)
    Lista.appendChild(elementList)
}
renderizar(nomes)*/