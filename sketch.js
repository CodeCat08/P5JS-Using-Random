/*
Using the random function.
random(min,max);
*/

var circle1 = {
  x:0,
  y:0,
  diameter:25,
  r:200,
  g:0,
  b:175
}

function setup() {
  createCanvas(800, 600);
  background(30,0,30);
  noStroke();
}

function draw() {
  //set variables to random value
  circle1.r = random(0,255);
  circle1.g = random(0,255);
  circle1.b = random(0,255);
  circle1.x = random(0,width);
  circle1.y = random(0,height);
  
  //draw ellipse
  fill(circle1.r,circle1.g,circle1.b,100);
  ellipse(circle1.x,circle1.y,circle1.diameter,circle1.diameter);
}