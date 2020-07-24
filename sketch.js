// Teachable Machine
// The Coding Train / Daniel Shiffman
// Modifications by Muhammad Ahabb Sheraz
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = '.\Recitation.ml\ml5.js\"

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "Nothing detected";
  // Pick an emoji based on label
  if (label == "Basit") {
    emoji = "Sheikh Abdul Basit Abdul Samad";
  } else if (label == "Mishari") {
    emoji = "Mishary bin Rashid Alafasy";
  } else if (label == "OmerAmin") {
    emoji = "Omer Amin";
  } else if (label == "JunaidJamshed") {
    emoji = "Junaid Jamshed";
  } else if (label == "AbuBakr") {
    emoji = "Abu Bakr al-Shatri";
  } else if (label == "AbdurRehman") {
    emoji = "Abdur-Rahman as-Sudais";
  }


  // Draw the emoji
  textSize(32);
  text(emoji, width / 2, height / 2);
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