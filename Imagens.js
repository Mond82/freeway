let imagemDaEstrada
let imagemDoAtor
let imagemDoCarro1
let imagemDoCarro2
let imagemDoCarro3
let somDaTrilha
let somDaColisao
let somDoPonto

function preload (){

  imagemDaEstrada=loadImage("imagens/estrada.png")
  imagemDoAtor=loadImage("imagens/ator-1.png")
  imagemDoCarro1=loadImage("imagens/carro-1.png")
imagemDoCarro2=loadImage("imagens/carro-2.png")
imagemDoCarro3=loadImage("imagens/carro-3.png")
imagemCarros=[ imagemDoCarro1,imagemDoCarro2,imagemDoCarro3 ]   
somDaTrilha= loadSound("sons da vaca mugindo/trilha.mp3")
somDaColisao= loadSound("sons da vaca mugindo/colidiu.mp3")
somDoPonto= loadSound("sons da vaca mugindo/pontos.wav") 
  
}