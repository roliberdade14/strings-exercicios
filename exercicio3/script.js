const minhaFrase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

function substituirCores(frase) {
    const fraseAlterada = frase.replace(/verde/g, 'rosa').replace(/azul/g, 'laranja')
    console.log(minhaFrase)
    console.log(fraseAlterada)
            

const inicioDaParteEmMinusculas = minhaFrase.indexOf('mas não deixe o gato sair');


const parteAntes = minhaFrase.substring(0, inicioDaParteEmMinusculas);


const parteEmMinusculas = minhaFrase.substring(inicioDaParteEmMinusculas, inicioDaParteEmMinusculas + 'mas não deixe o gato sair'.length);


const parteDepois = minhaFrase.substring(inicioDaParteEmMinusculas + 'mas não deixe o gato sair'.length);


const parteEmMaiusculas = parteEmMinusculas.toUpperCase();

const fraseFinal = parteAntes + parteEmMaiusculas + parteDepois;

console.log(fraseFinal);


}

// Chamando a função e passando a constante como argumento
substituirCores(minhaFrase);
