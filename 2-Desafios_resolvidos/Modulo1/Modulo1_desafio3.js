//===MODULO-1 EXERCICIO-3

var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(descricao) {

   const result = (descricao.indexOf("Javascript")+1) ? true : false;

   console.log(result)

    }

    temHabilidade(skills)