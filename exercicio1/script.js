 function imprimirComidasFavoritas (){
    const nome = prompt("Qual seu nome")
    let imprimirComida1 = prompt("Qual sua comida favorita Nº1")
    let imprimirComida2 = prompt("Qual sua comida favorita Nº2")
    let imprimirComida3 = prompt("Qual sua comida favorita Nº3")

    console.log(`Estas são as comidas favoritas de :${nome}\n${imprimirComida1}\n${imprimirComida2}\n${imprimirComida3}`)

} 
imprimirComidasFavoritas()