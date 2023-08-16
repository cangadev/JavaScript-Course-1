

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
    ];


function Renderi(descricao){
    for(todo of descricao){
        
        const {nome, habilidades}=todo
        console.log(`O ${nome} possui as habilidades:`,habilidades.join(", "))
    }

}
Renderi(usuarios);

/*JOIN serve para unir os dados do array, poderia ser simplesmente join()
mas usei o join(", ") para unir os elementos e separa-los por virgula
*/

/**
 * O Diego possui as habilidades: Javascript, ReactJS, Redux
 * O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
 */
