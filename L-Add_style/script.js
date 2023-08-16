
let Container = document.querySelector('body')
let List = document.querySelector('ul')

List.style.width = 10;
List.style.backgroundColor = `#4883ff`

//Criar button
let btn = document.createElement('button')
let Text = document.createTextNode("Click")
btn.appendChild(Text)
//Adiciona a btn no body
Container.appendChild(btn)

btn.onclick=()=>{
    List.style.color = `white`
    List.style.backgroundColor = `#16161d`
 
}