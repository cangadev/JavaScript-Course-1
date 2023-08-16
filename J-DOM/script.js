
/**
 * getElementById: Busca elemento pelo id
 * getElementByTagName: bucar elemento pelo nome da Tag
 * getElementByClassnName: Busca elemento pela Class
 * querySeletor: buscar 1 elemento pelo: nomeDaTag, Id, className
 * querySeletorAll: buscar todos elementos pelo: nomeDaTag, Id, className
 */


let inputText = document.getElementsByTagName('input')
//Vai pegar todas inputs que encontrar no documento HTML
console.log(inputText)

let inputt = document.getElementsByTagName('input')[0]
//Vai pegar a primeira input que encontrar no documento HTML
console.log(inputt)

