
let Container = document.querySelector('body')
let List = document.querySelector('ul')

//Criando input
let inputText = document.createElement('input')
inputText.setAttribute('type','text')
//Adiciona a input no body
Container.appendChild(inputText)
//Criar button
let btn = document.createElement('button')
let Text = document.createTextNode("Click")
btn.appendChild(Text)
//Adiciona a btn no body
Container.appendChild(btn)

btn.onclick=()=>{
    let valueInput = inputText.value;
    alert(valueInput)
//Remover o elemento ul
    Container.removeChild(List)
}