let s = 100; //diameter of circle
let x = 50; //x coordinate start
let y = 50; //y coordinate start
let vx = 7; //velocity in x-direction
let vy = 2; //velocity in y-direction

let pokeball; //create an iage

function preload(){
  pokeball = loadImage ('assets/pokeball.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);
  pokeball.resize(s,s);
  image(pokeball,x,y);

  //ellipseMode(CORNER)
  
//ellipse(x, y, d);
  x = x + vx;
  y = y + vy;
  //d = d+1
  //console.log(pokeball.width);
  
  if (x + pokeball.width/2 >= windowWidth || x - pokeball.width/2 <= 0){
      vx = -vx;
      }
   if (y + pokeball.height/2 >= windowWidth || y - pokeball.height/2 <= 0){
      vy = -vy;
      }
  }
