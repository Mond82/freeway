

//Velocidades
let xCarros = [ 600,600,600,600,600,600] 
let yCarros = [ 40,96,150,210,260,310 ]

let velocidadeCarros=[ 1.5,2.5,3.5,4.5,4.5,4.5]    
function mostraCarro(){
 for(i=0;i<3;i++) {  
  image(imagemCarros[ i], xCarros[ i],yCarros[ i    ],50,40)
 
 rotate_and_draw_image(imagemCarros[i ]    ,xCarros[ i+3    ],yCarros[i+3 ],50,40,180)
   
  
 }
 
   
  
}
function movimentaCarro(){
  for (let i =0;i < 3 ;i = i+ 1){  
  xCarros[ i    ]-=velocidadeCarros[  i  ]
  
  xCarros[  i + 3  ]+=velocidadeCarros[   i+3   ]
  
} 
  
  
}
function voltaPosicaoInicialDoCarro(){
  for (let i = 0 ; i < 3 ; i = i + 1 ) {  
  if( passouTodaTela(xCarros[   i  ])){
    xCarros[  i   ]=600
  } if(xCarros[ i + 3    ]>651){
    xCarros[ i + 3  ]=-30
  
 }
}    
} 
function rotate_and_draw_image(img,img_x, img_y, img_width, img_height, img_angle){
  imageMode(CENTER);
  translate(img_x+img_width/2, img_y+img_width/2);
  rotate(PI/180*img_angle);
  image(img, 0, 0, img_width, img_height);
  rotate(-PI / 180 * img_angle);
  translate(-(img_x+img_width/2), -(img_y+img_width/2));
  imageMode(CORNER);
}
function passouTodaTela (xCarro ){
  return xCarro < -50
 }
