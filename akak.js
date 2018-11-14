
function setup(){
  //PImage img;
  createCanvas(720,960);
  background(254,197,99);
  //img = loadImage("girlWithBaby.png");
  
  //-------------------draw start----------------
  fill(239,200,169);
  //badak
  quad(-9, 728, 719, 633, 756, 958, 0, 974);
  
  stroke(0);
  strokeWeight(3);
  //neck
  quad(369, 138, 316, 105, 302, 172, 362, 206);
  //face
  triangle(406,76,268,86,395,167);
  line(386,104,399,107);
  
  //head
  fill(10);
  quad(277, 34, 375, 65, 354, 162, 251, 117);
  arc(331, 77, 150, 119, PI+QUARTER_PI, TWO_PI);
  fill(54,37,30);
  
  //body
  quad(373, 199, 301, 172, 241, 314, 438, 308);
  
  fill(225,180,138);
  //babyhead
  ellipse(228,281,77,85);
  line(262,286,247,275);
  
  //legs
  fill(53,36,30);
  
  ellipse(369,857,114,39);ellipse(329,803,112,39);
  fill(225,180,138);
  stroke(0);
  rect(276,659,49,143);
  noStroke();
  ellipse(320,801,87,23);
  stroke(0);
  rect(312,710,49,141);
  noStroke();
  ellipse(359,850,94,20);
  
  //skirts
  stroke(0);
  fill(248,223,241);
  rect(234,580,191,132);
  fill(255,255,255);
  quad(418, 435, 236, 443, 199, 578, 449, 618);
  //podaegi
  quad(286, 474, 206, 452, 193, 296, 297, 320);
  quad(424, 439, 279, 470, 285, 318, 459, 289);
  
  
  //arm
  fill(53,36,30);
  quad(359, 212, 303, 198, 268, 352, 326, 353);
  quad(329, 498, 279, 486, 267, 351, 327, 351);
//---------------------draw end-------------------

 
}
function draw(){
  
  if (key == 's' || key == 'S') {

    //save("data/girlWithBaby.png");


  }
  
  if (key == 'q' || key == 'Q') {
    //img.filter(BLUR, 6);
    //image(img, 0, 0);
  }
    if (key == 'w' || key == 'W') {
    //img.filter(THRESHOLD, 0.7);
    //image(img, 0, 0);
  }
    if (key == 'e' || key == 'E') {
   // img.filter(GRAY);
    //image(img, 0, 0);
  }
    if (key == 'r' || key == 'R') {
    //img.filter(INVERT);
   // image(img, 0, 0);
  }
}
