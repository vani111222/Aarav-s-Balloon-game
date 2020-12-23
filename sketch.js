var balloon;
var balloonImg
var balloon1
var balloon1Img
var balloon2
var balloon2Img
var balloon3
var balloon3Img
var arrow;
var arrowImg
var bow;
var bowImg
var backround1
var backroundImg
var score=0;
var arrowgroup,balloongroup
function preload(){
balloonImg=loadImage("red_balloon0.png")
balloon1Img=loadImage("green_balloon0.png")
balloon2Img=loadImage("blue_balloon0.png")
  balloon3Img=loadImage("pink_balloon0.png")
arrowImg=loadImage("arrow0.png")
bowImg=loadImage("bow0.png")
  backroundImg=loadImage("background0.png")
}
function setup(){
  
  createCanvas(400,400)
  arrowgroup=createGroup()
  balloongroup=createGroup()
  balloon1group=createGroup()
  balloon2group=createGroup()
  balloon3group=createGroup()
  
  background1=createSprite(5,5,400,400)
  background1.addImage(backroundImg)
  background1.scale=2.4
  
  // CREATE SPRITES
  
 
  
  bow=createSprite(380,200,50,50)
  bow.addImage(bowImg)
}
function draw(){
  background(255)
  background1.velocityX=-3
  if (background1.x<0){
    background1.x=background1.width/2
  }
 // background(0);
  bow.y=World.mouseY
  if(keyDown("space")){
    arrowbla();
  }
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 10 == 0) {
    if (select_balloon == 1) {
      redbla();
    } else if (select_balloon == 2) {
      greenbla();
    } else if (select_balloon == 3) {
      bluebla();
    } else {
      pinkbla();
    }
  }
 if (balloongroup.isTouching(arrowgroup)){
   // balloon.lifetime=0
   balloongroup.destroyEach();
    score += 3
  }
  else
  if (balloon1group.isTouching(arrowgroup)){
   // balloon1.lifetime=0
    
   balloon1group.destroyEach();
    score += 4
  }else
  if (balloon2group.isTouching(arrowgroup)){
   // balloon2.lifetime=0
    
   balloon2group.destroyEach();
    score += 5
  }else
    if (balloon3group.isTouching(arrowgroup)){
      //balloon3.lifetime=0
      
   balloon3group.destroyEach();
      score += 2
    }
  
 
  drawSprites();
  text("SCORE:"+score,270,30)
text("Here is my game made by: Aarav",100,100);
}

  

function redbla(){
   
  balloon=createSprite(50,Math.round(random(20,370)),30,30)
  balloon.velocityX=5
 balloon.addImage(balloonImg)
  balloon.scale=0.1
  balloongroup.add(balloon)
  // balloon.debug=true
} 
function greenbla(){
  balloon1=createSprite(120,Math.round(random(20,370)),30,30)
 balloon1.velocityX=4
  balloon1.addImage(balloon1Img)
  balloon1.scale=0.08
  balloon1group.add(balloon1)
}
function bluebla(){
   
  balloon2=createSprite(130,Math.round(random(20,370)),30,30)
  balloon2.velocityX=3
 balloon2.addImage(balloon2Img)
  balloon2.scale=0.1
  balloon2group.add(balloon2)
  // balloon.debug=true
} 
function pinkbla(){
  
  balloon3=createSprite(160,Math.round(random(20,370)),30,30)
  balloon3.velocityX=2
 balloon3.addImage(balloon3Img)
  balloon3.scale=1.3
  balloon3group.add(balloon3)
  // balloon.debug=true
} 

function arrowbla(){
   
   arrow=createSprite(400,bow.y,7,7)
    arrow.addImage(arrowImg)
  arrow.scale=0.3
    arrow.velocityX=-4
  arrowgroup.add(arrow)
  //arrow.debug=true
  arrow.setCollider("rectangle",0,0,20,20)
  arrow.lifetime=100
} 