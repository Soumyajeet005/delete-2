var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;

function preload() {
carAnimation1 = loadAnimation("images/car1.png");
carAnimation2 = loadAnimation("images/car2.png");
playerAnimation=loadAnimation("images/Player-03.png");
logAnimation = loadAnimation("images/log2.png");
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
   

     player = new Player (width/2,height-25);
 }

function draw() {
  background("skyblue");

//grasses where the player can rest 
for(var i=1;i<6;i++){
  var bottomGrass1 = createSprite(680,height-50-(i*400),width,grassHeight);
  if(i%2===0){
    var road = createSprite(683,height-150-(i*400)+grassHeight,width,300)
    road.shapeColor="black";
  }
  bottomGrass1.shapeColor="green";
}
  // to create rows of car 
//  for(var i=1;i<40;i++){
 // cars = new Car(2);
 // carGroup1.add(cars.spt);  
 // }
  //
  //for(i=1;i<logGroup1.length;i++){
  //  if(logGroup[1].x<0)
  //  {
  //    logGroup[1].x=width;
  //  }

//  }

  // to create rows of logs
  //for(var i=0;i<40;i++){
   // log = new Car(2);
   // logGroup1.add(logs.spt);  
   // }


 //amking the log reapper 
 for(i =1;i<logGroup1.lenght;i++){
  if(logGroup1[i].x<0){
  logGroup1[i].x=width;  
  }
  for(i=1;i<carGroup1.lenght;i++){
  if(carGroup1[i].x<0 || carGroup1[i].x>1366){
     carGroup1[i].x = width;
  }  
  }
 }

   tarnslate(0,-player.spt,y+height-150);
 

  drawSprites();
}
function keyPressed() 
{
if(keyCode == UP_ARROW)
{
player.move(0,-2);  
}  
else if(keyCode == DOWN_ARROW)
{
  player.move(0,2);
}
else if (keyCode == LEFT_ARROW)
{
player.move(-2,0);  
}
else if(keyCode == RIGHT_ARROW)
{
 player.move(2,0); 
}
}
