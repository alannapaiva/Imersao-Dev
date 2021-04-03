const botao = document.querySelector("button");
const real =  5.52;
const result =0;

function calculaDollar(){
    const input = document.querySelector("input");
    const dollar = input.value;
    const result = dollar * real;
    input.value = result.toFixed(2);
}

botao.onclick = calculaDollar;