
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var launchingForce = 100;

function preload()
{
	boyImage = loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(180,580,20,20)
	boy.addImage("boy",boyImage);
	boy.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(580,650,370,370);
	ground = new Ground(400,650,800,30);
	stone = new Stone(120,520,30);
	mango1 = new Mango(630,200,50,50);
	mango2 = new Mango(700,250,50,50);
	mango3 = new Mango(550,170,50,50);
	mango4 = new Mango(510,300,50,50);
	mango5 = new Mango(410,250,50,50);
	mango6 = new Mango(600,100,50,50);
	launcher = new Launcher(stone.body,{x:120,y:520}); 

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  background(255);
  
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcher.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);

 drawSprites();

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})

}

function mouseReleased() {

 launcher.fly();

}

function keyPressed() {

if (keyCode === 32) {

	launcher.attach(stone.body);

}

}

function detectollision(stone1,mango1) {

	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone1.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	 if(distance <= mango1.r + stone1.r) {

		Matter.body.setStatic(mango1.body,false);

	 }

}


