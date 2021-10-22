//var bg , bg2, bg3 ;
var bgimg , bg2img, bg3img ;
//var mango, pineapple,grapes,custard_apple,banana,apple;
var mangoimg, pineappleimg,grapesimg,custard_appleimg,bananaimg,appleimg;
//var flower_1, flower_2,flower_3,flower_4;
var flower_1img, flower_2img,flower_3img,flower_4img;

function preload(){
bgimg=loadImage("images/background.jpg");
bg2img=loadImage ("images/background_2.jpg");
bg3img=loadImage("images/level_1.jpg");
mangoimg=loadImage("images/mango.png");
pineappleimg=loadImage("images/pineapple.png")
grapes=loadImage("images/grapes.png");
custard_appleimg=loadImage("images/custard_apple.png");
bananaimg=loadImage("images/banana.png");
appleimg=loadImage("images/apple.png");
flower_1img=loadImage("images/flower_1.png");
flower_2img=loadImage("images/flower_2.png");
flower_3img=loadImage("images/flower_3.png");
flower_4img=loadImage("images/flower_4.png");
lion=loadSound("images/lion.mp3");
playimg=loadImage("images/play.png");


}

function setup(){
  createCanvas(900,700);
  background(0);

  

  bg=createSprite(450,350);
  bg.addImage(bgimg);
  bg.scale=0.18;

  play=createSprite(450,600,20,20);
  play.addImage(playimg);
}

function draw(){

if(mousePressedOver(play)){
  Sound1();
  play.visible=false;
  bg.visible=false;

}


  drawSprites();
}

function mousePressed(){

}

function Sound1(){
  lion.play();
 
}
