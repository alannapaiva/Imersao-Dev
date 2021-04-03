// receber um numero do usuario
//1 - escrever o numero no INPUT - pegar o valor do INPUT
/*
var numeroRandom = 1;
//1.1 pegar o INPUT
console.log(document.querySelector("input"));
//1.2 pegar o valor do INPUT
console.log(document.querySelector("input").value);
//1.3 guardar o valor do INPUT
var valorDoInput = console.log(document.querySelector("input").value);
console.log('variavel: ', valorDoInput);
*/
//2 
// 2.3 - pegar o valor que o usuario digitou no INPUT
//var valorDoInput = console.log(document.querySelector("input").value);
//2.1- Clica no botão
//console.log(document.querySelector("button"));
//2.2- ouvir o evento do clique no botão
//querySelector é uma função que faz uma busca por seletor, você fala qual é o seletor dentro dos parenteses e o seletor tem que ficar entre aspas
//addEventListenner adiciona um ouvinte de um evento,adicionando o evento que ta no botão que ta no document,vulgo, HTML
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Se o usuario acertou ou nao
// 1 - comparar o numero certo com o numero do usuario
// 2 -  verifica se o valor esta certo
// 3 - parabenizar o usuario, imprime valor
// 4 - verificar se o usuario errou
// 5 - falar que o usuario eroru
// 6 mostrar o status da jogada no sol e posicionar o elemento no sol
// 7 -inserir a mensagem que o usuario errou ou acertou
var numeroCerto = 1;

function pegarChute(){
  var valorDoInput = document.querySelector("input").value;

  if(numeroCerto == valorDoInput){
    console.log("você acertou!!!");
  } else{
    console.log("você errou!!");
  }
}

document.querySelector("button").addEventListener("click", pegarChute);





















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let tentativas = 3;
document.querySelector("#tentativas").innerText = `Tentativas restantes: ${tentativas}`;

let numeroSecreto = Math.random()*10;

function button(){

   const input = document.querySelector("input");

   if(tentativas < 1){
      alert("Suas tentativas acabaram!")
         setTimeout(function(){
            window.location.reload(true)}, 1)
   } else
         if(parseInt(input.value) > 10 || parseInt(input.value) <= 0 || input.value == ""){
            alert("Valor inválido! Digite novamente.");
         }
   }
} 
*/























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let tentativas = 3;
document.querySelector(
  "#tentativas"
).innerText = `Tentativas restantes: ${tentativas}`;

let numeroSecreto = Math.round(Math.random() * (10 - 1) + 1);

function button() {
  const input = document.querySelector("input");

            if (tentativas < 1) {
        alert('Suas tentativas acabaram!')
                    setTimeout(function() {
          window.location.reload(true)
      }, 1)
      } else {
  
  if (
    parseInt(input.value) > 10 ||
    parseInt(input.value) <= 0 ||
    input.value == ""
  ) {
    alert("Valor inválido! Digite novamente.");
  } else {
    if (parseInt(input.value) == numeroSecreto) {
      document.querySelector("p").innerText = "Resposta certa, parabéns! :D";

      tentativas = 3;

      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
     
      document.querySelector("p").classList.add("acertou");
      
      setTimeout(function() {
          window.location.reload(true)
      }, 1500)
    } else if (parseInt(input.value) < numeroSecreto) {
      document.querySelector("p").innerText = "O número secreto é maior!";

      tentativas -= 1;
      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
      document.querySelector("p").classList.add("errou");
    } else if (parseInt(input.value) > numeroSecreto) {
      document.querySelector("p").innerText = "O número secreto é menor!";

      tentativas -= 1;
      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
      document.querySelector("p").classList.add("errou");
    }
  }
      }
}

*/





























/*
var botao = document.querySelector("button");
var h3= document.querySelector('h3');

var numeroSecreto = parseInt(Math.random() *10);
var tentativas = 3;

function descobrirNumero() {
   var input = document.querySelector("input");
   var chute = input.value;
      if(chute == numeroSecreto){
         input.value = "Acertou";
         break;
      } else 
            if(chute < numeroSecreto){
               input.value = "Errou. O número secreto é maior ";
               tentativas = tentativas -1;
            } else 
                  if(chute>numeroSecreto){
                     input.value = "Errou! O numero secreto é menor";
                     tentativas = tentativas -1;
                  }
   alert(tentativas);
}
botao.onclick = descobrirNumero;
*/