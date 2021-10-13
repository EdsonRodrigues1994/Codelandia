

let novaImagem = document.querySelector(".imagens img");
console.log(novaImagem);

novaImagem.addEventListener("click", novoLike);



function novoLike(){
  if(novaImagem.classList == ""){
  novaImagem.classList.toggle(novaImagem.src = "/img/deulike.png");
  }else{
    novaImagem.classList.toggle(novaImagem.src = "/img/coracao.png");
    novaImagem.classList.remove("/img/deulike.png")
    novaImagem.classList.remove("/img/coracao.png")
  }
};



