var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8;
var tom,jerry;
var tomImg,jerryImg;
var backgroundImg
var edge;
var gameCoin,gameCoinImg;

function preload(){
    tomImg=loadImage("images/cat1.svg")
    jerryImg=loadImage("images/mouse1.svg");
    backgroundImg=loadImage("images/grass.jpeg")
    gameCoinImg=loadImage("images/gameCoin.jpeg");
    
}
function setup(){
createCanvas(1200,600);
maze1=createSprite(100,130,20,280);
maze1.shapeColor="brown";

maze2=createSprite(300,110,280,20);
maze2.shapeColor="brown";

maze3=createSprite(600,300,280,20);
maze3.shapeColor="brown";

maze4=createSprite(800,150,20,200);
maze4.shapeColor="brown";

maze5=createSprite(1000,300,20,280);
maze5.shapeColor="brown";

maze6=createSprite(130,450,200,20);
maze6.shapeColor="brown";

maze7=createSprite(400,440,20,200);
maze7.shapeColor="brown";

maze8=createSprite(1050,575,280,20);
maze8.shapeColor="brown";

tom=createSprite(200,200,20,20);
tom.addImage(tomImg)
tom.scale=0.5

jerry=createSprite(400,300,20,20);
jerry.addImage(jerryImg)
    jerry.scale=0.5


}
function draw(){
    background(backgroundImg);

   if(keyDown("up")){
       
       jerry.velocityY=-2.5;
   }
   if(keyDown("left")){
    
    jerry.velocityX=-2.5;
}
if(keyDown("right")){
    
    jerry.velocityX=2.5;
}
if(keyDown("down")){
    
    jerry.velocityY=2.5;
}


if(keyDown("r")){
       
    tom.velocityY=-2.5;
}
if(keyDown("e")){
 
 tom.velocityX=-2.5;
}
if(keyDown("t")){
 
 tom.velocityX=2.5;
}
if(keyDown("d")){
 
tom.velocityY=2.5;
}
    if(frameCount %150 ===0){
        var gameCoin=createSprite(300,200,30,30);
        gameCoin.y=Math.round(random(0,600))
        gameCoin.x=Math.round(random(0,1200))
        gameCoin.addImage(gameCoinImg);
        gameCoin.scale=0.05;
        gameCoin.lifetime=300;
       
    }
    
    if(frameCount %300===0){
      tom.velocityX=tom.velocityX+1.5;
        tom.velocityY=tom.velocityY+1.5;
        if (jerry.isTouching(gameCoin)){
            gameCoin.visible=false;
           jerry.velocityX=jerry.velocityX+1.5;
           jerry.velocityY=jerry.velocityY+1.5;
            
        }
    }
    

    //if(tom.isTouching(maze1)||tom.isTouching(maze2)||tom.isTouching(maze3)||tom.isTouching(maze4)||
      // tom.isTouching(maze5)||tom.isTouching(maze6)||tom.isTouching(maze7)||tom.isTouching(maze8)){

       // tom.collide();
   // }

   edge=createEdgeSprites();
   

   tom.bounceOff(maze1);
   tom.bounceOff(maze2);
   tom.bounceOff(maze3);
   tom.bounceOff(maze4);
   tom.bounceOff(maze5);
   tom.bounceOff(maze6);
   tom.bounceOff(maze7);
   tom.bounceOff(maze8);
   tom.bounceOff(edge);
   
   jerry.bounceOff(maze1);
   jerry.bounceOff(maze2);
   jerry.bounceOff(maze3);
   jerry.bounceOff(maze4);
   jerry.bounceOff(maze5);
   jerry.bounceOff(maze6);
   jerry.bounceOff(maze7);
   jerry.bounceOff(maze8);
   jerry.bounceOff(edge);

   
    
    drawSprites();

    
}
    