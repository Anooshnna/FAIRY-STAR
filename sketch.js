var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var fairyBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine;
var world;
var body;
var fairyVoice

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

	fairyVoice = loadSound('sound/JoyMusic.mp3');
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
  fairyVoice.play();
	
   fairy = createSprite(130,520);
   fairy.addAnimation("flying",fairyImg);
   fairy.scale = 0.2



	star = createSprite(630,30);
	star.addImage(starImg);
	star.scale = 0.06;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, starBody);
  
	fairyBody = Bodies.circle(fairy.position.x,fairy.position.y,5,{isStatic:true});
    World.add(world,fairyBody)
	

	
	
	Engine.run(engine);
	

}


function draw() {
  background(bgImg);

Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.x = fairyBody.position.x
  fairy.y = fairyBody.position.y
 
  
 
  //write code to stop star in the hand of fairy
  if(star.y>470 && starBody.position.y>470){

	Matter.Body.setStatic(starBody,true)

  }

  drawSprites();

}

function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 100
		fairyBody.position.x = fairyBody.position.x + 100
		}
		

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}


 if(keyCode === LEFT_ARROW){
	fairy.x = fairy.x - 100
	fairyBody.position.x = fairyBody.position.x - 100
}


	
}
