const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob4,bob5,bob3,bobDiameter,roof,sling1,sling2,sling3,sling4,sling5;


function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	
bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

  roof = new Roof(400,100,300,40);
  sling1= new Suspender(bob1.body,roof.body,-50*2,0);
  sling2= new Suspender(bob2.body,roof.body,-25*2,0);
  sling3= new Suspender(bob3.body,roof.body,0*2,0);
  sling4= new Suspender(bob4.body,roof.body,25*2,0);
  sling5= new Suspender(bob5.body,roof.body,50*2,0);
  

  /*roof=new Roof(width/2,height/4,width/7,20);
   bobDiameter=40;
    startBobPositionX=width/2; 
   startBobPositionY=height/4+500;
    bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
       bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
        bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
         bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
         bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);*/
	Engine.run(engine);
  
}


function draw() {
  background(100);


  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  

  //keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); } 
} 



