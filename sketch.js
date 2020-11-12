var car;
var wall1;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  wall1=createSprite(1500,200,60,300);
  wall1.shapeColor=("blue");
  car=createSprite(150,200,50,50);
  car.shapeColor=("white");
  car.velocityX=speed;

}

function draw() {
  background("black");  
if(wall1.x-car.x<(car.width+wall1.width)/2){
  car.velocityX=0;
 deformation=0.5*weight*speed*speed/22500;
 if(deformation>180){
  car.shapeColor=("red");
 }
 if(deformation<180 && deformation>100){
  car.shapeColor=("yellow");
   }
  if(deformation<100){
  car.shapeColor=("lightGreen");
   }
}
  drawSprites();
}