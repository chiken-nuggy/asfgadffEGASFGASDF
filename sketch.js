var frame1,frame2;
var nextButton,playButton;
var nextButtonimg,playButtonImg;
var frame1img,frame2img,bgImg;
var charactersGroup;
var attack;
var EnergyBallImg,PowerBallImg,StretchyLimbsImg
var gameState = 0
var character

function preload(){
 frame1img= loadImage("images/storyline/storyline.jpg");
 nextButtonimg = loadImage("images/butons/buton1.png");
 playButtonImg = loadImage("images/butons/button2irl.png");
 bgImg = loadImage("images/background/eee.png");
 narutoImg= loadImage("images/background/godtrollface.jpg");
 luffyImg= loadImage("images/background/ozzylegend.png");
 gokuImg= loadImage("images/characters/goku222.jpg");
 monster1Img = loadImage("images/characters/monster1.jpg");
 monster2Img = loadImage("images/characters/monster.jpg");
}
function setup(){
createCanvas(1200,800);

frame1 = createSprite(553,350);
frame1.addImage(frame1img);
frame1.scale=4;


playButton = createSprite(1150,50);
playButton.addImage(playButtonImg);
playButton.scale=0.3;

charactersGroup = createGroup();
monsterGroup = createGroup();
EnergyBallGroup = createGroup();
PowerBallGroup = createGroup();
StretchyLimbsGroup = createGroup();

character = createSprite(85,702,50,50);
}
function draw(){
background(bgImg)
text(mouseX + ","+ mouseY, mouseX, mouseY) 

 

 if(mousePressedOver(playButton)){
   gameState = 1;
 }

 if(gameState==1){
   frame1.visible = false;
   playButton.visible=false;
   var rand = Math.round(random(1,3));
  switch(rand){
    case 1: character.addImage(narutoImg);
            break;
    case 2: character.addImage(luffyImg);
            break;
    case 3: character.addImage(gokuImg);
            break; 
    default: break;      
  }
   spawnMonsters();


   if (keyDown("space") && rand == 1) {
    createPowerBall();
    
  }

  else if(keyDown("space") && rand == 2){
    createStretchyLimbs()
  }

  else{
    createEnergyBall();
  }

   if(monsterGroup.isTouching(charactersGroup)){
      gameState = 2;
   }
 }

 else if(gameState == 2){
   
 }
  drawSprites();
}

/*function selectCharacter(){
  var character = createSprite(85,702,50,50);

  var rand = Math.round(random(1,3));
  switch(rand){
    case 1: character.addImage(narutoImg);
            break;
    case 2: character.addImage(luffyImg);
            break;
    case 3: character.addImage(gokuImg);
            break; 
    default: break;      
  }
  charactersGroup.add(character);
}
*/
function spawnMonsters() {
  
 if (frameCount % 200 === 0) {
    var monster = createSprite(1015,29,40,40);
    monster.y = Math.round(random(80,620));

    var rand2 = Math.round(random(1,2));
    switch(rand2){
      case 1: monster.addImage(monster1Img);
              break;
      case 2: monster.addImage(monster2Img);
              break;
      default: break;  
    }
    monster.scale = 0.2;
    monster.velocityX = -3;
    
     //assign lifetime to the variable
     monster.lifetime = 500;
     monsterGroup.add(monster);
  }
}

function createEnergyBall() {
  var EnergyBall= createSprite(100, 100, 60, 10);
  EnergyBall.addImage(EnergyBallImg);
  EnergyBall.x = 360;
  EnergyBall.y=goku.y;
  EnergyBall.velocityX = -4;
  EnergyBall.lifetime = 100;
  EnergyBall.scale = 0.3;
  EnergyBallGroup.add(EnergyBall);
   
}

function createPowerBall() {
  var  PowerBall= createSprite(100, 100, 60, 10);
  PowerBall.addImage(PowerBallImg);
  PowerBall.x = 360;
  PowerBall.y=naruto.y;
  PowerBall.velocityX = -4;
  PowerBall.lifetime = 100;
  PowerBall.scale = 0.3;
  PowerGroup.add(PowerBall);
   
}



function createStretchyLimbs() {
  var StretchyLimbs= createSprite(100, 100, 60, 10);
  StretchyLimbs.addImage(StretchyLimbsImg);
  StretchyLimbs.x = 360;
  StretchyLimbs.y=luffy.y;
  StretchyLimbs.velocityX = -4;
  StretchyLimbs.lifetime = 100;
  StretchyLimbs.scale = 0.3;
  StretchyLimbsGroup.add(StretchyLimbs);
   
}



