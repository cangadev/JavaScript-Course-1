let Lista = document.querySelector("ul")

let Array = [
    "Acordar cedo - 6h",
    "Higienizar-se",
    "Ir ao ginásio",
    "Programar",
    "Estudar Ingles"
];

function renderizarElement(){
    for(todo of Array){
        let elementList = document.createElement("li");
        let textoElement = document.createTextNode(todo)

        elementList.appendChild(textoElement)
        Lista.appendChild(elementList)
    }
}
renderizarElement()