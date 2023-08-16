let Lista = document.querySelector('ul')
let inputElement = document.querySelector('input')

var array = [
    'Ter Lógica',
    'Aprender HTML-CSS',
    'Aprender JavaScript'
];

function renderizar(){
    Lista.innerHTML=""
    for(todo of array){
        let elementList = document.createElement('li')
        let textoLi = document.createTextNode(todo)

        elementList.appendChild(textoLi)
        Lista.appendChild(elementList)
    }
}
renderizar()

function addTodo(){
   let newElement = inputElement.value;
   
   array.push(newElement)

   inputElement.value=""

   renderizar()

}