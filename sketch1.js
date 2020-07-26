// Teachable Machine
// The Coding Train / Daniel Shiffman
// Modifications by Muhammad Ahabb Sheraz
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "";

// Classifier and model url
let classifier;
let modelURL = 'https://ahabbsciencestudiopak.github.io/Who-is-Reciting/'

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(screen.width/2.2,screen.height/6);
  noLoop();

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);
  let instance = 0;
  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  // text(label, width/2, height - 16);
  //let instance = 0;
  //n = 0  

  // Background noise is headphones
  let text1 = "Nothing detected";
  // Pick an emoji based on label
  if (label == "Basit") {
    text1 = "Sheikh Abdul Basit Abdul Samad";
  } else if (label == "Mishari") {
    text1 = "Mishary bin Rashid Alafasy";
  } else if (label == "OmerAmin") {
    text1 = "Omer Amin";
  } else if (label == "JunaidJamshed") {
    text1 = "Junaid Jamshed";
  } else if (label == "AbuBakr") {
    text1 = "Abu Bakr al-Shatri";
  } else if (label == "AbdurRehman") {
    text1 = "Abdur-Rahman as-Sudais";
  }
   
 
  // Draw the emoji
  textSize(32);
  text(text1, width / 2, height / 2);
  //text(instance, width / 1.5, height / 1.5);
  //console.log(instance);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}