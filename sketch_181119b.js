
PImage bgi;
PFont font1,font2,font3;
function setup(){
  createCanvas(1600,960);
  background(230,255,255);
  
  bgi=loadImage("mart.jpg");
  
  String s="Campbell's";
  String s2="C O N D E N S E D";
  String s3="TOMATO";
  String s4="SOUP";
  font1 = createFont("CafeAroma", 48);
  font2 = createFont("휴먼둥근헤드라인",48);
  font3 = createFont("Cooper Std Black",48);
}
function draw(){
  
  var x,y,w,h;
  x=1;
  y=1;
  w=1;
  h=1;
  
  rectMode(CENTER);
   noStroke();
   
   //-----------lid-----------------------
   fill(103,73,80);//brown
   ellipse(x+350,y+768, w*433,h*115);
   
   fill(200,14,15);//red
   rect(x+350,y+325,w*420,h*300);
   
   
   fill(255);//white
   rect(x+350,y+609,w*420,h*308);
   
   fill(200,14,15);//red
   ellipse(x+350,y+453, w*420,h*85);
   
   
   fill(103,73,80);//brown
   ellipse(x+350,y+171, w*427,h*92);
   
   fill(255);//white
   ellipse(x+350,y+764, w*420,h*85);
   noFill();
   stroke(0);
  strokeWeight(5);
  ellipse(x+350,y+165, w*390,h*65);
  
  ellipse(x+350,y+166, w*363,h*67);
  ellipse(x+350,y+177, w*320,h*45);
  ellipse(x+350,y+185, w*243,h*25);
  //------------------------------------------
  
  //texts!!
  noStroke();
  textAlign(CENTER);
  fill(255);
  textFont(font1);
  textSize(135);
  text(s, x+350, y+350);//Campbell's
  
  //logo
  fill(200,60,0);
  ellipse(x+350,y+500, w*110,110);
  
    fill(255);
    textFont(font2);
    textSize(20);
    text(s2, x+350, y+410);
    textSize(60);
    fill(160,0,0);
    text(s3, x+350, y+632);
  
    fill(0);
    textFont(font3);
    textSize(71);
    text(s4, x+350, y+749);
  
}

 function mouseIsPressed(){
   if(mouseButton == LEFT){
   background(random(200,255));
 }
 else{
   image(bgi,0,0,1300,1000);
 }
}
