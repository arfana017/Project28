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

	engine = Engine.create();
	world = engine.world;

	/*boy = createSprite(180,580,20,20)
	boy.addImage("boy",boyImage);
	boy.scale = 0.1;*/

	tree = new Tree(580,650,370,370);
	ground = new Ground(400,650,800,30);
	stone = new Stone(120,520,30);
	mango1 = new Mango(630,200,30,15);
	mango2 = new Mango(700,250,30,15);
	mango3 = new Mango(550,170,30,15);
	mango4 = new Mango(510,300,30,15);
	mango5 = new Mango(410,250,30,15);
	mango6 = new Mango(600,100,30,15);
	launcher = new Launcher(stone.body,{x:120,y:520}); 

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });*/

	Engine.run(engine);
  
}


function draw() {

  background(255);

  image(boyImage,85,460,200,230);
  
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

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})

}

function mouseReleased() {

 launcher.fly();

}

function keyPressed() {

if (keyCode === 32) {

	Matter.Body.setPosition(stone.body, {x:235, y:420}) 
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

function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
      
		Matter.Body.setStatic(lmango.body,false);
		
    }

  }
