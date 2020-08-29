


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var same1,same2,same3,same4,same5;
var ropeSame1,ropeSame2,ropeSame3,ropeSame3,ropeSame4,ropeSame5;
var roof;

function setup() {
    createCanvas(1350, 630);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
    
    roof = new Roof(650,100,14000,30);

    same1 = new Same(250,250,500);
    same2 = new Bob(400,250,500);
    same3 = new Bob(550,250,500);
    same4 = new Bob(700,250,500);
    same5 = new Same(850,250,500);
    
    
    ropeSame1 = new Ropesame(same1.body,roof.body,-400,0);
    ropeSame2 = new Ropesame(same2.body,roof.body,-250,0);
    ropeSame3 = new Ropesame(same3.body,roof.body,-100,0);
    ropeSame4 = new Ropesame(same4.body,roof.body,50,0);
    ropeSame5 = new Ropesame(same5.body,roof.body,200,0);
    
console.log(same1)

}

function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  drawSprites();
 
  roof.display();
  same1.display();
  same2.display();
  same3.display();
  same4.display();
  same5.display();
  

  ropeSame1.display();
  ropeSame2.display();
  ropeSame1.display();
  ropeSame3.display();
  ropeSame4.display();
  ropeSame5.display();

  keyPresses();

}

function keyPresses()
{
if(keyIsPressed === true)
{

    Matter.Body.applyForce(same1.body,same1.body.position,{x:-320,y:0});
}
}




