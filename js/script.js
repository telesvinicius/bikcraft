//Ativar links do menu
const links = document.querySelectorAll(".header_menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(elemento);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button")

function ativaPergunta(event){
const pergunta = event.currentTarget;
const controls = pergunta.getAttribute("aria-controls")
const resposta = document.getElementById(controls);

resposta.classList.toggle("ativa")
const ativa = resposta.classList.contains("ativa")
pergunta.setAttribute("aria-expanded", ativa)
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click", ativaPergunta)
}

perguntas.forEach(eventosPerguntas)

//GALERIA DE BICICLETAS

const galeria = document.querySelectorAll(".bicicleta_imagem img")
const galeriaContainer = document.querySelector(".bicicleta_imagem")

function trocarImagem(event){    

const img = event.currentTarget;
const media = matchMedia("(min-width:1000px)").matches
if (media){
    galeriaContainer.prepend(img)
}
}

function eventosGaleria(img){
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação plugin

if(window.SimpleAnime){
    new SimpleAnime();
}
