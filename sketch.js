const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divider1, divider2, divider3, divider4, divider5, divider6, divider7;
var par;

function setup() {
  createCanvas(561.42, 655);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(327.5, height, 655, 20);

  divider1 = new Division(5, 495, 10, 300);
  divider2 = new Division(93.57, 495, 10, 300);
  divider3 = new Division(187.14, 495, 10, 300);
  divider4 = new Division(280.71, 495, 10, 300);
  divider5 = new Division(375.28, 495, 10, 300);
  divider6 = new Division(468.85, 495, 10, 300);
  divider7 = new Division(556.42, 495, 10, 300);

  par = new Particle(100, 10, 5, {isStatic: false})
}

function draw() {
  background(0);  

  ground.display();

  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();

  par.display();

  if(frameCount%60 === 0){
  par.push(new Particle(random(width/2-10, width/2+10, 10, 10)));
    }  

    for(var j = 40; j <= width; j=j+50){
      Plinko.push(new Plinko(j, 75));
    }

    for()
  drawSprites();
}