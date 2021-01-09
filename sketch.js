
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisibleground,groundImage;
var score
var survivaltime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  // createCanvas(600,200);
  monkey=createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale =0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
}



function draw() {
  background (0);
if(ground.x<0) {
    ground.x=ground.width/2;
  }
   text("Survival Time : "+survivaltime,280,50);
   survivaltime=survivaltime+Math.round (frameCount/100);
   
    if(keyDown("space") && monkey.y>150) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    food();
    rock();
  drawSprites();

}
function food() {
  if (frameCount % 80 ===0) {
    var banana=createSprite(390,Math.round(random(100,300)),10,40);
    banana.addImage(bananaImage);
    banana.scale =0.1 ;
    banana.lifetime=300;
    banana.velocityX=-10;
  }
 
}
function rock() {
  if (frameCount % 200 ===0) {
    var rock=createSprite(350,325,10,40);
    rock.addImage(obstacleImage);
    rock.lifetime=250;
    rock.velocityX=-8;
    rock.scale=0.1;
  }
}






