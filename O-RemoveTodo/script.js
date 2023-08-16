let Lista = document.querySelector('ul')
let inputElemente = document.querySelector('input')

var array = JSON.parse(localStorage.getItem('save_todo')) || [];

function renderizar(){
    Lista.innerHTML=""
    for(todo of array){
        let liElement = document.createElement('li')
        let liTexto = document.createTextNode(todo)

        let posicao = array.indexOf(todo)

        let linkA = document.createElement('a')
        let linkTexto = document.createTextNode('Excluir')

        linkA.appendChild(linkTexto)
        linkA.setAttribute('href', '#')

        linkA.setAttribute('onclick', 'eliminar('+posicao+')')

        liElement.appendChild(liTexto)
        liElement.appendChild(linkA)
        Lista.appendChild(liElement)
    }
}
renderizar();

function addTodo(){
    let valorInput = inputElemente.value;
    array.push(valorInput)
    inputElemente.value=""
    renderizar()
    saveToStorige()
}

function eliminar(posicao){
   array.splice(posicao, 1)
   renderizar();
   saveToStorige()
}

function saveToStorige(){
    localStorage.setItem('save_todo', JSON.stringify(array))
}
