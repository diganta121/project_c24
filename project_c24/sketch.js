const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bin1,bin2,bin3,ball;

function setup(){
    var canvas = createCanvas(1200,400);        
    engine = Engine.create();
    world = engine.world;

    bin1 = new Bin(703,360,20,70);
    bin2 = new Bin(750,377,70,20);
    ground = new Ground(600,height,1200,20);
    ball = new Ball(250,300,30,30);
    bin3 = new Bin(800,360,20,70);
}

function draw(){

    background(0);
    Engine.update(engine);

    bin1.display();
    bin2.display();
    bin3.display();
    ball.display();
    ground.display();
    

   
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:39,y:-45});
	
	 }
   }