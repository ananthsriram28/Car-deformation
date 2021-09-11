var car, wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  drawSprites();
  col();
}

function col(){

  if(car.isTouching(wall)){
car.width=(0.5*weight*speed*speed)/22500
car.velocityX=0;

if(car.width<100){
car.shapeColor=color(0,255,0);
}
else if(car.width>100 && car.width<180){
car.shapeColor=color(230,230,0);
}
else if(car.width>180){

  car.shapeColor=color(255,0,0);
}

  }

  
}