//MODULO1_EXERCICO4

function experiencia(anos) {
    
    if(anos>-1 && anos<=1){
        console.log("Iniciante")
    }
    else if(anos>1 && anos<=3){
        console.log("Intermediário")
    }
    else if(anos>=3 && anos<=6){
        console.log("Avançado")
    }
    else if(anos>=7){
        console.log("Master")
    }
    else{
        console.log("Descrição indisponível")
    }
    
    }

    var anosEstudo = 7;
    experiencia(anosEstudo);


    /*0-1 ano: Iniciante
    1-3 anos: Intermediário
    3-6 anos: Avançado
    7 acima: Jedi Master*/
   
    