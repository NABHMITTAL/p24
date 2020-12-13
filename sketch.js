
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var bin1,bin2,bin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;





	//Create the Bodies Here.

	paper = new Paper(100,200)

	ground = new Ground()
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paper.display();

	ground.show();
  drawSprites();
 
}



