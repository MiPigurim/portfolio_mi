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

document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
      switch(skill.textContent) {
          case 'CSS':
              skill.style.color = 'blue';
              break;
          case 'HTML':
              skill.style.color = 'orange';
              break;
          case 'ReactJS':
              skill.style.color = 'cyan';
              break;
          case 'Figma':
              skill.style.color = 'pink';
              break;
          case 'VueJS':
              skill.style.color = 'green';
              break;
          case 'Vue Router':
              skill.style.color = 'lightgreen';
              break;
          case 'JavaScript':
              skill.style.color = 'yellow';
              break;
          case 'NodeJS':
              skill.style.color = 'purple';
              break;
          case 'Git':
              skill.style.color = 'red';
              break;
          case 'GitHub':
              skill.style.color = 'gray';
              break;
          case 'Json Server':
              skill.style.color = 'brown';
              break;
          case 'TailwindCSS':
              skill.style.color = 'teal';
              break;
          case 'TypeScript':
              skill.style.color = 'lightblue';
              break;
          case 'IconFinder':
              skill.style.color = 'lightcoral';
              break;
          // Add more cases as needed
          default:
              skill.style.color = 'black'; // Default color
      }
  });
});