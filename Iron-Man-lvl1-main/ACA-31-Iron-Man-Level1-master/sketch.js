
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 playerImage = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(510,300,);
  bg.addImage(backgroundImg);
    bg.velocityY = 3;
 bg.scale=1.5;
 edges = createEdgeSprites();
 player = createSprite(80,500,20,20);
 player.addImage(playerImage);
 player.scale=0.3;
}


function draw() {

    if (bg.y > 500) {
      bg.y = 200 ;
    }

    player.bounceOff(edges[0]);
    player.bounceOff(edges[1]);
    player.bounceOff(edges[2]);
    //player.bounceOff(edges[3]);

  if(keyDown("up")){
  player.velocityY = player.velocityY-0.2;
  }
  if(keyDown("left")){
    player.x = player.x-5;
  }
  if(keyDown("right")){
    player.x = player.x+5;
  }
  player.velocityY = player.velocityY+0.05;


    drawSprites();

}
