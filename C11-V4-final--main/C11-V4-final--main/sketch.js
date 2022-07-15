var trex, trex_running, trex_collided;
var  invisibleGround, groundImage;
//add a variable named ground

function preload(){
  //uncomment the animation instruction
  //trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup() {
  // add the canvas
  
  //create a trex sprite
  
  //uncomment the animation instruction
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
 
}

function draw() {
  background(220);
 
  //jumping the trex on space key press
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8
  
 
 //stop trex from falling down 
  //trex.collide(ground);
//let us draw the sprite
}
