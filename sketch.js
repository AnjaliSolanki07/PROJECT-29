const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(400,360,20,30);
  box2 = new BlueBox(420,360,20,30);
  box3 = new BlueBox(440,360,20,30);
  box4 = new BlueBox(460,360,20,30);
  box5 = new BlueBox(480,360,20,30);
  box6 = new BlueBox(500,360,20,30);

  box7 = new GreenBox(410,330,20,30);
  box8 = new GreenBox(430,330,20,30);
  box9 = new GreenBox(450,330,20,30);
  box10 = new GreenBox(470,330,20,30);
  box11 = new GreenBox(490,330,20,30);

  box12 = new RedBox(420,310,20,30);
  box13 = new RedBox(440,310,20,30);
  box14 = new RedBox(460,310,20,30);
  box15 = new RedBox(480,310,20,30);

  box16 = new YellowBox(430,280,20,30);
  box17 = new YellowBox(450,280,20,30);
  box18 = new YellowBox(470,280,20,30);

  box19 = new BlueBox(440,250,20,30);
  box20 = new BlueBox(460,250,20,30);

  box21 = new GreenBox(450,220,20,30);

  box22 = new GreenBox(400,135,20,30);
  box23 = new GreenBox(420,135,20,30);
  box24 = new GreenBox(440,135,20,30);
  box25 = new GreenBox(460,135,20,30);
  box26 = new GreenBox(480,135,20,30);
  box27 = new GreenBox(500,135,20,30);

  box28 = new BlueBox(410,105,20,30);
  box29 = new BlueBox(430,105,20,30);
  box30 = new BlueBox(450,105,20,30);
  box31 = new BlueBox(470,105,20,30);
  box32 = new BlueBox(490,105,20,30);

  box33 = new RedBox(420,75,20,30);
  box34 = new RedBox(440,75,20,30);
  box35 = new RedBox(460,75,20,30);
  box36 = new RedBox(480,75,20,30);
  
  box37 = new YellowBox(430,45,20,30);
  box38 = new YellowBox(450,45,20,30);
  box39 = new YellowBox(470,45,20,30);

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(600,385,1200,15);

  groundHovering = new Platform(450,160,200,15);
  
}

function draw() {
  background(153,204,255);
  Engine.update(engine);   
  text(mouseX +','+ mouseY,30,40);
  debug:true;

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}