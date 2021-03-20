var car;
var wall;
var speed;
var mass;
var deformation;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  mass = random(400,1500);

  car = createSprite(400,200,50,50);
  wall = createSprite(1500,200,40,200);

  car.velocityX = speed;
  
  

}

function draw() {
  background(255,255,255);  
  if(isTouching(wall,car)){
    car.velocityX = 0;
    deformation = 0.5*mass*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = ("red");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor =("yellow");
    }
  if(deformation<=100){
    car.shapeColor =("blue");
  }
    
  }
  drawSprites();
}