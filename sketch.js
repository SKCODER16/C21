function setup() {
  createCanvas(800,400);
 A=createSprite(200, 200, 50, 70);
 A.shapeColor="blue"
A.velocityX=2
 B=createSprite(700, 200, 50, 50);
 B.shapeColor="blue"
 B.velocityX=-2
}

function draw() {
  background("yellow");  
  drawSprites();




if (touching(A,B)){
  A.velocityX=A.velocityX*(-1)

  B.velocityX=B.velocityX*(-1)
}


}
