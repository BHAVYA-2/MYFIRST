var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,30,30);
  
}

function draw() 
{


   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    ball.position.x = ball.position.x +5;
    background('YELLOW');
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    ball.position.x= ball.position.x -5;
    
    background('BROWN');
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    ball.position.y = ball.position.y - 5;
background('OLIVE');
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    ball.position.y = ball.position.y + 5;
  background('INDIGO');
  }

  drawSprites();
}




