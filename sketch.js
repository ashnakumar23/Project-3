var runner, running_boy;
var path;

function preload(){
  //pre-load images
  running_boy = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  runner = createSprite(180,50,20,50);
  runner.addAnimation("running", running_boy);

  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  if(path.y > 400){
    path.y = height/2;
  }

  left_boundary = createSprite(180,180,400,10);
  left_boundary.visible = false;
  right_boundary = createSprite(-180,-180,400,10);
  right_boundary.visible = false;
}

function draw() {
  background(0);

  drawSprites();

  runner.collide(left_boundary);
  runner.collide(right_boundary);

  runner = mouseX;
}