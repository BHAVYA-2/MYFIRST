var ship_1,ship_2,ship_3,ship_4;
var sea,seaAnimation;

function preload(){

  seaImage = loadAnimation("sea.png");
  ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(200,200,20,20);
sea.addAnimation("seaImage","sea.png");
sea.scale=0.4;
sea.velocityX=-4;
sea.x -= sea.width/2;


ship = createSprite(200,200,20,20);
ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
ship.scale = 0.2;

}

function draw() {
  background(220);

if(sea.x > 400){
  sea.x = sea.width/2;
}

drawSprites();

}