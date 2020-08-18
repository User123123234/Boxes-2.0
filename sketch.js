var static, moving;

function setup() {
  createCanvas(1920,1080);
  static=createSprite(200,200)
  moving=createSprite(300,300)
}

function draw() {
  background(0,0,100);  
  drawSprites();

moving.shapeColor="blue";
static.shapeColor="blue";

  moving.x=mouseX;
  moving.y=mouseY;


if (moving.x-static.x<=moving.width/2+static.width/2&&static.x-moving.x<=moving.width/2+static.width/2){
  moving.shapeColor="red";
  static.shapeColor="red";


}
}