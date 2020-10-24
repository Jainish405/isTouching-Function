var movingRect,fixedRect;
function setup(){
  createCanvas(800,400);

  movingRect=createSprite(100,200,40,20);
  fixedRect=createSprite(230,120,10,30);
  movingRect.shapeColor='cyan';
  fixedRect.shapeColor='red';
}

function draw() {

background(10);

movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
 movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
 fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
   movingRect.shapeColor='yellow';
   fixedRect.shapeColor='blue';
 }else{
  movingRect.shapeColor='cyan';
  fixedRect.shapeColor='red';
 }
 
 drawSprites();
}