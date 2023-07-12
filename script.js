var recebeImagem = document.getElementById("recebeImagem");

const quantFotos = 15;

var botaoUm = document.getElementById("botaoUm");
var botaoDois = document.getElementById("botaoDois");
var botaoTres = document.getElementById("botaoTres");

function adicionaImagem() {
  let str = "";
  for (let i = 1; i <= quantFotos; i++) {
    str += `
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 d-flex justify-content-center align-items-center mt-2 foto" id="foto${i}">
        <img src="imgs/img${i}.jpg" alt="Foto de alunos" class="img-fluid">
      </div>
    `;
  }
  console.log(str);
  recebeImagem.innerHTML = str;
}

function umaColuna() {
  //As classes começam em 0
  for (let i = 0; i < quantFotos; i++) {
    foto[i].className = "foto";
    foto[i].classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "col-xxl-12", "d-flex", "justify-content-center", "align-items-center", "mt-2", "foto");
  }

  botaoUm.classList.add("btn-success");
  botaoUm.classList.remove("btn-secondary");
  botaoDois.classList.remove("btn-success");
  botaoDois.classList.add("btn-secondary");
  botaoTres.classList.remove("btn-success");
  botaoTres.classList.add("btn-secondary");
}

function duasColunas() {
  for (let i = 0; i < quantFotos; i++) {
    foto[i].className = "foto";
    foto[i].classList.add("col-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6", "col-xxl-6", "d-flex", "justify-content-center", "align-items-center", "mt-2", "foto");
  }

  botaoUm.classList.add("btn-secondary");
  botaoUm.classList.remove("btn-success");
  botaoDois.classList.remove("btn-secondary");
  botaoDois.classList.add("btn-success");
  botaoTres.classList.remove("btn-success");
  botaoTres.classList.add("btn-secondary");
}

function normal(){
  for (let i = 0; i < quantFotos; i++) {
    foto[i].className = "foto";
    foto[i].classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-6", "col-xl-4", "col-xxl-4", "d-flex", "justify-content-center", "align-items-center", "mt-2", "foto");
  }

  botaoUm.classList.add("btn-secondary");
  botaoUm.classList.remove("btn-success");
  botaoDois.classList.remove("btn-success");
  botaoDois.classList.add("btn-secondary");
  botaoTres.classList.remove("btn-secondary");
  botaoTres.classList.add("btn-success");
}

window.addEventListener('DOMContentLoaded', adicionaImagem);

var foto = document.getElementsByClassName("foto");

botaoUm.addEventListener('click', umaColuna);
botaoDois.addEventListener('click', duasColunas);
botaoTres.addEventListener('click', normal);