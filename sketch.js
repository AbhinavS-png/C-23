//namespacing
const World = Matter.World; //create world
const Engine = Matter.Engine; //physic engine
const Bodies = Matter.Bodies; //creates objects

var engine, world;
var ground;
var box1;
var box2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 

  //JSON javascript object notation
  var ground_options={
    'isStatic':true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
 box1 = new box(200,100,50,50);
 box2 = new box(240,90,50,50);


}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  //rect - rectangle as well as square 
  // ellipse - circle as well as ellipse/oval
box1.display();
box2.display();
}
