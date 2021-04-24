var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg");
  bg2=loadImage("aladdin_cave2.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);

  clues();
  security.display();
  textSize(20);
  fill(255);
  text("Score: " + score, 450, 50);

  if(score===3){
    clear();
    background(bg2);

    strokeWeight(3)
    stroke("red");
    textSize(40);
    fill(0);
    text("Score: " + score, 250, 200);
  }
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}