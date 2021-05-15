var player1, player2;
var ground;
var bg;
var health1,
  health2,
  healthBar1,
  healthBlock1,
  healthLevel1,
  healthBar2,
  healthBlock2,
  healthLevel2;
var player1LeftPunch,
  player1MoveLeft,
  player1LeftNorm,
  player1LeftJump,
  player1LeftCrouch,
  player1LeftKick,
  player1LeftLoose;
var player1RightPunch,
  player1MoveRight,
  player1RightNorm,
  player1RightJump,
  player1RightCrouch,
  player1RightKick,
  player1LeftLoose;
var player1Win;
var pMode = 2;
var restart, restImg;

var player2LeftPunch,
  player2MoveLeft,
  player2LeftNorm,
  player2LeftJump,
  player2LeftCrouch,
  player2LeftKick,
  player2LeftLoose;
var player2RightPunch,
  player2MoveRight,
  player2RightNorm,
  player2RightJump,
  player2RightCrouch,
  player2RightKick,
  player2LeftLoose;
var player2Win;

var gameState;
function preload() {
  //background
  bg = loadImage("arena.jpg");

  //Player1
  restImg = loadImage("restart.png");
  //Normal animation for standing at one place
  player1LeftNorm = loadAnimation(
    "Images/Player1/Left/Norm/6.png",
    "Images/Player1/Left/Norm/7.png",
    "Images/Player1/Left/Norm/8.png",
    "Images/Player1/Left/Norm/9.png"
  );

  player1RightNorm = loadAnimation(
    "Images/Player1/Right/Norm/5.png",
    "Images/Player1/Right/Norm/6.png",
    "Images/Player1/Right/Norm/7.png",
    "Images/Player1/Right/Norm/8.png"
  );

  //Punching action
  player1LeftPunch = loadAnimation(
    "Images/Player1/Left/Punch/0.png",
    "Images/Player1/Left/Punch/1.png",
    "Images/Player1/Left/Punch/2.png",
    "Images/Player1/Left/Punch/3.png",
    "Images/Player1/Left/Punch/4.png"
  );

  player1RightPunch = loadAnimation(
    "Images/Player1/Right/Punch/0.png",
    "Images/Player1/Right/Punch/1.png",
    "Images/Player1/Right/Punch/2.png",
    "Images/Player1/Right/Punch/3.png",
    "Images/Player1/Right/Punch/4.png"
  );

  //Crouching action
  player1LeftCrouch = loadAnimation(
    "Images/Player1/Left/Crouch/0.png",
    "Images/Player1/Left/Crouch/1.png",
    "Images/Player1/Left/Crouch/2.png"
  );

  player1RightCrouch = loadAnimation(
    "Images/Player1/Right/Crouch/0.png",
    "Images/Player1/Right/Crouch/1.png",
    "Images/Player1/Right/Crouch/2.png"
  );

  //Jumping action
  player1LeftJump = loadAnimation(
    "Images/Player1/Left/Jump/0.png",
    "Images/Player1/Left/Jump/1.png",
    "Images/Player1/Left/Jump/2.png",
    "Images/Player1/Left/Jump/3.png",
    "Images/Player1/Left/Jump/4.png"
  );

  player1RightJump = loadAnimation(
    "Images/Player1/Right/Jump/0.png",
    "Images/Player1/Right/Jump/1.png",
    "Images/Player1/Right/Jump/2.png",
    "Images/Player1/Right/Jump/3.png",
    "Images/Player1/Right/Jump/4.png",
    "Images/Player1/Right/Jump/5.png"
  );

  //Kicking action

  player1LeftKick = loadAnimation(
    "Images/Player1/Left/Kick/0.png",
    "Images/Player1/Left/Kick/1.png",
    "Images/Player1/Left/Kick/2.png",
    "Images/Player1/Left/Kick/3.png",
    "Images/Player1/Left/Kick/4.png",
    "Images/Player1/Left/Kick/5.png"
  );

  player1RightKick = loadAnimation(
    "Images/Player1/Right/Kick/0.png",
    "Images/Player1/Right/Kick/1.png",
    "Images/Player1/Right/Kick/2.png",
    "Images/Player1/Right/Kick/3.png",
    "Images/Player1/Right/Kick/4.png",
    "Images/Player1/Right/Kick/5.png"
  );

  // Movement
  player1RightMove = loadAnimation(
    "Images/Player1/Left/Move_right/5.png",
    "Images/Player1/Left/Move_right/6.png",
    "Images/Player1/Left/Move_right/7.png",
    "Images/Player1/Left/Move_right/8.png"
  );
  player1LeftMove = loadAnimation(
    "Images/Player1/Left/Move_left/5.png",
    "Images/Player1/Left/Move_left/6.png",
    "Images/Player1/Left/Move_left/7.png",
    "Images/Player1/Left/Move_left/8.png"
  );

  //Blocking
  // player1LeftBlock=loadAnimation("Images/Player1/Block/Left/2.png")
  // player1RightBlock=loadAnimation("Images/Player1/Block/Right/2.png")

  //loosing animation
  player1LeftLoose = loadAnimation(
    "Images/Lose/Player1/Left/5.png",
    "Images/Lose/Player1/Left/6.png",
    "Images/Lose/Player1/Left/7.png",
    "Images/Lose/Player1/Left/8.png"
  );
  player1RightLoose = loadAnimation(
    "Images/Lose/Player1/Right/5.png",
    "Images/Lose/Player1/Right/6.png",
    "Images/Lose/Player1/Right/7.png",
    "Images/Lose/Player1/Right/8.png"
  );

  //Winning Animation
  player1Win = loadAnimation(
    "Images/Win/Player1/5.png",
    "Images/Win/Player1/6.png",
    "Images/Win/Player1/7.png",
    "Images/Win/Player1/8.png",
    "Images/Win/Player1/9.png"
  );

  //Player2

  //Normal animation for standing at one place
  player2RightNorm = loadAnimation(
    "Images/Player2/Right/Norm/5.png",
    "Images/Player2/Right/Norm/6.png",
    "Images/Player2/Right/Norm/7.png",
    "Images/Player2/Right/Norm/8.png"
  );

  player2LeftNorm = loadAnimation(
    "Images/Player2/Left/Norm/5.png",
    "Images/Player2/Left/Norm/6.png",
    "Images/Player2/Left/Norm/7.png",
    "Images/Player2/Left/Norm/8.png"
  );

  //Punching action
  player2LeftPunch = loadAnimation(
    "Images/Player2/Left/Punch/0.png",
    "Images/Player2/Left/Punch/1.png",
    "Images/Player2/Left/Punch/2.png",
    "Images/Player2/Left/Punch/3.png",
    "Images/Player2/Left/Punch/4.png"
  );

  player2RightPunch = loadAnimation(
    "Images/Player2/Right/Punch/0.png",
    "Images/Player2/Right/Punch/1.png",
    "Images/Player2/Right/Punch/2.png",
    "Images/Player2/Right/Punch/3.png",
    "Images/Player2/Right/Punch/4.png"
  );

  //Crouching action
  player2LeftCrouch = loadAnimation(
    "Images/Player2/Left/Crouch/0.png",
    "Images/Player2/Left/Crouch/1.png",
    "Images/Player2/Left/Crouch/2.png"
  );

  player2RightCrouch = loadAnimation(
    "Images/Player2/Right/Crouch/0.png",
    "Images/Player2/Right/Crouch/1.png",
    "Images/Player2/Right/Crouch/2.png"
  );

  //Jumping action
  player2LeftJump = loadAnimation(
    "Images/Player2/Left/Jump/0.png",
    "Images/Player2/Left/Jump/1.png",
    "Images/Player2/Left/Jump/2.png",
    "Images/Player2/Left/Jump/3.png",
    "Images/Player2/Left/Jump/4.png",
    "Images/Player2/Left/Jump/5.png"
  );

  player2RightJump = loadAnimation(
    "Images/Player2/Right/Jump/0.png",
    "Images/Player2/Right/Jump/1.png",
    "Images/Player2/Right/Jump/2.png",
    "Images/Player2/Right/Jump/3.png",
    "Images/Player2/Right/Jump/4.png",
    "Images/Player2/Right/Jump/5.png"
  );

  //Kicking action
  player2LeftKick = loadAnimation(
    "Images/Player2/Left/Kick/0.png",
    "Images/Player2/Left/Kick/1.png",
    "Images/Player2/Left/Kick/2.png",
    "Images/Player2/Left/Kick/3.png",
    "Images/Player2/Left/Kick/4.png",
    "Images/Player2/Left/Kick/5.png"
  );

  player2RightKick = loadAnimation(
    "Images/Player2/Right/Kick/0.png",
    "Images/Player2/Right/Kick/1.png",
    "Images/Player2/Right/Kick/2.png",
    "Images/Player2/Right/Kick/3.png",
    "Images/Player2/Right/Kick/4.png",
    "Images/Player2/Right/Kick/5.png"
  );

  // Movement
  player2LeftMove = loadAnimation(
    "Images/Player2/Right/Move_left/5.png",
    "Images/Player2/Right/Move_left/6.png",
    "Images/Player2/Right/Move_left/7.png",
    "Images/Player2/Right/Move_left/8.png"
  );

  player2RightMove = loadAnimation(
    "Images/Player2/Left/Move_right/5.png",
    "Images/Player2/Left/Move_right/6.png",
    "Images/Player2/Left/Move_right/7.png",
    "Images/Player2/Left/Move_right/8.png"
  );

  //Blocking
  //player2LeftBlock=loadAnimation("Images/Player2/Block/Left/2.png")
  //player2RightBlock=loadAnimation("Images/Player2/Block/Right/2.png")

  //loosing animation
  player2LeftLoose = loadAnimation(
    "Images/Lose/Player2/Left/4.png",
    "Images/Lose/Player2/Left/5.png",
    "Images/Lose/Player2/Left/6.png",
    "Images/Lose/Player2/Left/7.png"
  );
  player2RightLoose = loadAnimation(
    "Images/Lose/Player2/Right/4.png",
    "Images/Lose/Player2/Right/5.png",
    "Images/Lose/Player2/Right/6.png",
    "Images/Lose/Player2/Right/7.png"
  );

  //Winning Animation
  player2Win = loadAnimation(
    "Images/Win/Player2/5.png",
    "Images/Win/Player2/6.png",
    "Images/Win/Player2/7.png",
    "Images/Win/Player2/8.png",
    "Images/Win/Player2/9.png"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(50);
  gameState = "play";

  player1 = createSprite(300, height - 300, 50, 50);

  player1.addAnimation("player1LeftNorm", player1LeftNorm);
  player1.addAnimation("player1RightNorm", player1RightNorm);
  player1.addAnimation("player1RightMove", player1RightMove);
  player1.addAnimation("player1LeftMove", player1LeftMove);
  player1.addAnimation("player1LeftPunch", player1LeftPunch);
  player1.addAnimation("player1RightPunch", player1RightPunch);
  player1.addAnimation("player1LeftCrouch", player1LeftCrouch);
  player1.addAnimation("player1RightCrouch", player1RightCrouch);
  player1.addAnimation("player1LeftJump", player1LeftJump);
  player1.addAnimation("player1RightJump", player1RightJump);
  player1.addAnimation("player1LeftKick", player1LeftKick);
  player1.addAnimation("player1RightKick", player1RightKick);
  player1.addAnimation("player1LeftLoose", player1LeftLoose);
  player1.addAnimation("player1RightLoose", player1RightLoose);
  player1.addAnimation("player1Win", player1Win);

  player1.scale = 2.5;

  player2 = createSprite(width - 300, 500, 50, 50);

  player2.addAnimation("player2RightNorm", player2RightNorm);
  player2.addAnimation("player2LeftNorm", player2LeftNorm);
  player2.addAnimation("player2RightMove", player2RightMove);
  player2.addAnimation("player2LeftMove", player2LeftMove);
  player2.addAnimation("player2LeftPunch", player2LeftPunch);
  player2.addAnimation("player2RightPunch", player2RightPunch);
  player2.addAnimation("player2LeftCrouch", player2LeftCrouch);
  player2.addAnimation("player2RightCrouch", player2RightCrouch);
  player2.addAnimation("player2LeftJump", player2LeftJump);
  player2.addAnimation("player2RightJump", player2RightJump);
  player2.addAnimation("player2LeftKick", player2LeftKick);
  player2.addAnimation("player2RightKick", player2RightKick);
  player2.addAnimation("player2LeftLoose", player2LeftLoose);
  player2.addAnimation("player2RightLoose", player2RightLoose);
  player2.addAnimation("player2Win", player2Win);
  player2.scale = 2.5;
  player2.debug = true;
  player1.debug = true;
  ground = createSprite(width / 2, height - 130, width, 19);
  ground.visible = false;
  //health bar
  healthBar1 = createSprite(150, 100, 300, 20);
  healthBar1.shapeColor = "white";
  healthLevel1 = createSprite(150, 100, 280, 10);
  healthLevel1.shapeColor = "red";
  healthBar2 = createSprite(width - 150, 100, 300, 20);
  healthBar2.shapeColor = "white";
  healthLevel2 = createSprite(width - 150, 100, 280, 10);
  healthLevel2.shapeColor = "red";
  //restart
  restart = createSprite(width / 2, height / 2 - 50, 20, 20);
  restart.addImage(restImg);
  restart.scale = 0.01;
  restart.visible = false;
}

function draw() {
  background(bg);
  player1.velocityY += 0.5;
  player2.velocityY += 0.5;
  if (gameState === "play") {
    //player should not cross each other
    if (player1.x >= width / 2) {
      player1.x = width / 2 - 20;
    }
    if (player2.x <= width / 2) {
      player2.x = width / 2 + 20;
    }
    //player1 functions
    // Function for right movement of player 1
    if (keyDown("d")) {
      //if(player1.x<player2.x){
      player1.x += 10;
      player1.changeAnimation("player1RightMove", player1RightMove);
    }

    // Function for left movement of player 1

    if (keyDown("a")) {
      player1.x -= 10;
      player1.changeAnimation("player1LeftMove", player1LeftMove);
    }
    console.log(healthLevel1);

    //Function for player1 jumping

    if (keyDown("w") && player1.y >= 500) {
      player1.velocityY = -12;
      player1.changeAnimation("player1LeftJump", player1LeftJump);
    } else {
      player1.changeAnimation("player1LeftNorm", player1LeftNorm);
    }

    //Function for player1 punching
    if (keyDown("e")) {
      player1.changeAnimation("player1LeftPunch", player1LeftPunch);
      pMode = 0;
    }
    //Function for player1 kicking
    if (keyDown("q")) {
      player1.changeAnimation("player1LeftKick", player1LeftKick);
      pMode = 0;
    }
    if (keyDown("s")) {
      player1.changeAnimation("player1LeftCrouch", player1LeftCrouch);
    }

    //player2 functions

    if (keyDown(RIGHT_ARROW)) {
      player2.x += 10;
      player2.changeAnimation("player2RightMove", player2RightMove);
    } else {
      player2.changeAnimation("player2RightNorm", player2RightNorm);
    }

    if (keyDown(LEFT_ARROW)) {
      player2.x -= 10;
      player2.changeAnimation("player2LeftMove", player2LeftMove);
    } else {
      player2.changeAnimation("player2RightNorm", player2RightNorm);
    }

    if (keyDown(UP_ARROW) && player2.y >= 500) {
      player2.velocityY = -12;
      player2.changeAnimation("player2RightJump", player2RightJump);
    } else {
      player2.changeAnimation("player2RightNorm", player2RightNorm);
    }
    if (keyDown("m")) {
      player2.changeAnimation("player2RightPunch", player2RightPunch);
      pMode = 1;
    }
    //Function for player1 punching
    if (keyDown("l")) {
      player2.changeAnimation("player2RightKick", player2RightKick);
      pMode = 1;
    }
    if (keyDown("DOWN_ARROW")) {
      player2.changeAnimation("player2RightCrouch", player2RightCrouch);
    }
    //health
    if (player1.isTouching(player2) && pMode === 0 && frameCount % 2 === 0) {
      healthLevel2.x += 2;
    }
    if (player2.isTouching(player1) && pMode === 1 && frameCount % 2 === 0) {
      healthLevel1.x -= 2;
    }
    console.log(player1.y, player2.y);
    if (healthLevel1.x < -140) {
      gameState = "redWin";

      restart.visible = true;
    }
    if (healthLevel2.x > windowWidth + 165) {
      gameState = "blueWin";

      restart.visible = true;
    }
    if (gameState === "redWin" || gameState === "blueWin") {
      restart.visible = true;
    }
    if (gameState === "redWin") {
      player1.changeAnimation("player1LeftLoose", player1LeftLoose);
      player2.changeAnimation("player2Win", player2Win);
    }
    if (gameState === "blueWin") {
      player2.changeAnimation("player2RightLoose", player2RightLoose);
      player1.changeAnimation("player1Win", player1Win);
    }
  }
  if (mousePressedOver(restart)) {
    gameState = "play";
    restart.visible = false;
    player1.x = 300;
    player1.y = height - 300;
    player2.x = width - 300;
    player2.y = height - 300;
    healthLevel1.x = 150;
    healthLevel2.x = width - 150;
  }
  player1.velocityY += 0.5;
  player1.collide(ground);
  player2.velocityY += 0.5;
  player2.collide(ground);
  console.log( pMode)
  drawSprites();
}
