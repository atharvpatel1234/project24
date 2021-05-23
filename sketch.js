
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,wal1,wall2,wall3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball = new Paper(100,350);
   ground = new wall(400,650,800,20);

   wall1 = new wall2(550,600,20,81)
   wall2 = new wall2(700,600,20,81)
   wall3 = new wall2(625,630,162,20)
   
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  fill("red");
  wall3.display();
  wall1.display();
  wall2.display();
  fill("gray");
  drawSprites();
 
}

function keyPressed(){
	var speed = {x:2,y:-5}
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:57,y:-57})
  }
}

