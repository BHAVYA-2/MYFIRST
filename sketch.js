var ship_1,ship_moving;
var seaImage;
var sea;

function preload(){
seaImg=loadImage("sea.png");
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);

  ship_1=createSprite(50,160,20,50);
  ship_1.addAnimation("running,ship_moving");
sea=createSprite(200,180,400,20);
ship_1.addImage("ship-1");

sea.x=sea.width/2

}
function draw() {
  background("sea");
 
sea.velocityX = -2;
console.log(sea.x)

if(sea.x<0){
  sea.x=sea.width/2;
}
drawSprites();
}