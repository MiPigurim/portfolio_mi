/* 
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele 
*/

// Objetivo 1
// Passo 1
const btnMostrarMais = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

btnMostrarMais.addEventListener("click", () => {
  // Passo 3
  mostrarMaisProjetos();

  // Objetivo 2
  // Passo 1
  esconderBotao();
});

function mostrarMaisProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("ativo");
  });
}

function esconderBotao() {
  btnMostrarMais.classList.add("remover");
}