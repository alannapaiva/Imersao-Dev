const pokemon = "Eevee";
const botao = document.querySelector("button");

function verificaPokemon(){
    const input = document.querySelector("input");
    const chute = input.value;
    //const chute = document.querySelector("input").value;  //entrar no html, buscar o input e busar o texto que o usuario digitou 

    //alert("chute: " +chute);
    //console.log("chute: " +chute);

    if (pokemon == chute){
        input.value = "Você acertou!!!";
        //alert("Você acertou!!!");
    } else{
        input.value = "Você errou!!!";
        //alert("Você Errou!");
    }
}

botao.onclick = verificaPokemon;



