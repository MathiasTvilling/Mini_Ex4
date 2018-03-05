var ctracker;
var x1=479
var x2=958
var x3=1439
var y1=350

function setup() {

  //web cam capture
  var capture = createCapture();
  capture.size(windowWidth, windowHeight);
  capture.position(0,0);

  var c = createCanvas(windowWidth, windowHeight);
  c.position(0,0);

  //setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);

}

function draw() {
  background(255);

//The face itself
  var positions = ctracker.getCurrentPosition();
  if (positions.length) { //check the availability of web cam tracking
    for (let i=0; i<positions.length; i++) {  //loop through all major face track points
       noStroke();
       fill(map(positions[i][0], 0, width, 100, 255), 0, 20, 200);  //color with alpha value
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 8, 8);
    }
  }

for (var i = 0; i< positions.length; i++) {

// The top row of text
// Sorting words into grids using if statements to define
// the area in which the text can be shown.
  if (positions[i][0]<x1&&positions[i][1]<y1){
    textSize (100);
    fill (255, 0, 0);
    text ('TELL', 100, 200);
  }

  if (positions[i][0]<=x2&&positions[i][1]<y1&&positions[i][0]>x1&&positions[i][1]<y1){
    textSize (100);
    fill (255, 0, 0);
    text ('ME', 660, 200);
  }

  if (positions[i][0]<=x3&&positions[i][1]<y1&&positions[i][0]>x2&&positions[i][1]<y1){
    textSize (100);
    fill (255, 0, 0);
    text ('HOW', 1100, 200);
  }

//The buttom row of text
  if (positions[i][0]<x1&&positions[i][1]>y1){
    textSize (100);
    fill (255, 0, 0);
    text ('YOU', 100, 600);
  }

  if (positions[i][0]<=x2&&positions[i][1]>y1&&positions[i][0]>x1&&positions[i][1]>y1){
    textSize (100);
    fill (255, 0, 0);
    text ('REALLY', 550, 600);
  }

  if (positions[i][0]<=x3&&positions[i][1]>y1&&positions[i][0]>x2&&positions[i][1]>y1){
    textSize (100);
    fill (255, 0, 0);
    text ('FEEL', 1090, 600);
  }
}
}

// Console.log used to find the values for variables x1, x2, x3 and y1
function mousePressed (){
  console.log (mouseX, mouseY);
}
