const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


   ground = new Ground(600,780,1200,40);

   box1 = new Box(800,700,50,50);
   box2 = new Box(850,700,50,50);
   box3 = new Box(900,700,50,50);

   box4 = new Box(800,600,50,50);
   box5 = new Box(850,600,50,50);
   box6 = new Box(900,600,50,50);

   box7 = new Box(800,500,50,50);
   box8 = new Box(850,500,50,50);
   box9 = new Box(900,500,50,50);

   box10 = new Box(800,400,50,50);
   box11= new Box(850,400,50,50);
   box12= new Box(900,400,50,50);

   box13= new Box(800,300,50,50);
   box14 = new Box(850,300,50,50);
   box15 = new Box(900,300,50,50);

   box16 = new Box(800,250,50,50);
   box17= new Box(850,250,50,50);
   box18 = new Box(900,250,50,50);

   box19 = new Box(800,200,50,50);
   box20 = new Box(850,200,50,50);
   box21 = new Box(900,200,50,50);

   box22 = new Box(800,150,50,50);
   box23 = new Box(850,150,50,50);
   box24 = new Box(900,150,50,50);

   box25 = new Box(800,100,50,50);
   box26= new Box(850,100,50,50);
   box27= new Box(900,100,50,50);

   box29= new Box(800,50,50,50);
   box30 = new Box(850,50,50,50);
   box31 = new Box(900,50,50,50);


   destroyer = new WreckingBall(200,400,50);

   sling = new slingshot(destroyer.body,{x:600,y:400})
    
}

function draw(){
    
    background(0);
    Engine.update(engine);

    fill("green");
    ground.display();

    strokeWeight(3)
    stroke ("white")
    fill("aqua")
    box1.display();
    box2.display();
    box3.display();

    stroke ("white")
    fill("blue")
    box4.display();
    box5.display();
    box6.display();
    stroke ("white")
    fill("aqua")

    box7.display();
    box8.display();
    box9.display();
    stroke ("white")
    fill("blue")

    box10.display();
    box11.display();
    box12.display();
    stroke ("white")
    fill("aqua")

    box13.display();
    box14.display();
    box15.display();

    stroke ("white")
    fill("blue")
    box16.display();
    box17.display();
    box18.display();
    stroke ("white")
    fill("aqua")

    box19.display();
    box20.display();
    box21.display();
    stroke ("white")
    fill("blue")

    box22.display();
    box23.display();
    box24.display();
    stroke ("white")
    fill("aqua")

    box25.display();
    box26.display();
    box27.display();

    destroyer.display();
    sling.display();
    
    

}