let x = [];
let y = [];
let amplitude = 180;
let angle = 390;
let num = 30; // Initialize num with a value
let size = 2;
let period = 9000;
let shift = 200;

let sliderone;
let slidertwo;
let exportButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#795548(110,70,43");
  num = windowWidth / size; // Set num based on canvas width and size
  angleMode(degrees);

  sliderone = createSlider(0, 255);
  sliderone.position(10, 10);
  sliderone.size(80);

  slidertwo = createSlider(0, 255);
  slidertwo.position(120, 10);
  slidertwo.size(80);

  exportButton = createButton("Export");
  exportButton.position(10, 40);
  exportButton.mousePressed(exportCanvas);
}

function draw() {
  background("rgb(110,70,43)");
  noStroke();

  let g = sliderone.value();
  let k = slidertwo.value();

  translate(width / 2, 0);
  for (let i = 0; i <= num; i++) {
    push();
    angle = (i / num) * 360 * period;
    x[i] = g * cos(angle + shift);
    y[i] = i * size;
    circle(x[i], y[i], size);
    circle(x[i] * 2, y[i], size * 0.2);
    circle(x[i] * 2, y[i], size * 0.6);
    circle(x[i] * 2, y[i], size * 0.2);
    fill("#FFFFFF");
    circle(x[i] * 3, y[i], size * 3.5);
    fill("#FFFFFF");
    circle(x[i] * 3, y[i], size * 3);
    
  
    fill("#DBAEAE");

    circle(x[i] * 1.3, y[i], size * 2.5);
    fill("#50FFFF0");
    circle(x[i], y[i] * 4 - 30, size);
    pop();
  }
  shift -= 0.00005 * k;
  
  line(0, 0, 0, height);
}

function exportCanvas() {
  saveCanvas("myCanvas", "jpg");
}
