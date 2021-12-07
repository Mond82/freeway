let yAtor=366
let xAtor=85
let meusPontos =0
function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30)  
}
function movimentaAtor(){
if(keyIsDown(UP_ARROW)){
 yAtor-=3 
}
  if(keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
  yAtor+=3  
}    
  }
}

function verificaColisao(){
  for (i=0;i<6;i=i+1){
    
    if(collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 30)){
  somDaColisao.play()   
    voltaAtorPosicaoInicial()
      // if(pontosMaiorQueZero()) {
        // meusPontos--
         
//  }       
 }
}  
}

function voltaAtorPosicaoInicial(){
  yAtor=366 
}  
 function incluiPontos() {
   textSize(25)
   textAlign(CENTER)
   fill(color(255,61,204))
  text(meusPontos,width/5,27)
 } 
function marcaPonto(){
  if(yAtor<15){
    meusPontos ++
    voltaAtorPosicaoInicial()
    somDoPonto.play()
    }
  }
function pontosMaiorQueZero(){
   return meusPontos>0
  } 
function podeSeMover(){
  if (yAtor>366){
    
    return false
    
    
}
  return true
}
