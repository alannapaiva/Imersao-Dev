//1 - pegar a id que tem o ID listaFilmes
// 1.1 - inserir a imagem

// 2 - inserir a imagem
// 2.1 - criar uma tag IMG
// 2.2 - definir o atributo SRC para nossa tag IMG
// 2.3 - Guardar a tag IMG dentro de uma variavel
// 2.4 - colocar a tag IMG dentro da div listaFilmes

function adicionarFilme() {
    var listaFilmes = document.querySelector("#listaFilmes");
    var campoFilmeFavorito = document.querySelector("#filme");
    var filmeFavorito = campoFilmeFavorito.value;
  
    var tagImg = "<img src=" + filmeFavorito + ">";
  
    if(!document.querySelector(`[src="${filmeFavorito}"]`)  {
  
        listaFilmes.insertAdjacentHTML("beforeend", tagImg);
    }
  
}
  


