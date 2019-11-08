let img;
let mic;


function setup() {
   
  createCanvas(windowWidth, windowHeight,);
 
  noStroke();
//background('black');
    mic = new p5.AudioIn();
    mic.start();
    background(0);
}


function draw() {
  var boca_w = width/1.2;
  micLevel = mic.getLevel();
    mov= map(micLevel, 0, 1, 10, 100);
   
  noStroke();
  push();
  translate(width/2, height/2);
  rectMode(CENTER);
  background('black');


  fill(200, 214, 141);
  ellipse(0,-100, 400, 600/1.60+mov,40+mov);

    
    fill('green' );
  triangle(165, 0+mov,-165, 0+mov, 0, 265+mov);
    
    ellipse(0,-100, 400+mov, 600/1.60+mov,40+mov);
fill(80,70,47,66);
    stroke(0);
    strokeWeight(20);
    ellipse(100,-80,90+mov,140+mov);
    ellipse(-100,-80,90+mov,140+mov);
      pop();

  
  //boca
  noFill();
  stroke('black');
  strokeWeight(40);
  arc(width*0.5,height/1.50+mov,565+mov,-5, radians(20), radians(15+mov));
    

}


function touchStarted(){
    getAudioContext().resume();
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
