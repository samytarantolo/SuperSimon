let noise = true; // noise pour le son
let order = []; // définir l'ordre
let flash; // couleur qui s'éclaircit
let on = false; // ON | OFF
let win; // Partie Win
let compTurn; // Score


const buttonupleft = document.querySelector("#buttonupleft");
const buttonupright = document.querySelector("#buttonupright");
const buttondownleft = document.querySelector("#buttondownleft");
const buttondownright = document.querySelector("#buttondownright");
const startButton = document.querySelector("#start");
const turnCounter = document.querySelector("#turn");



startButton.addEventListener('click', (event) => {
    if (on || win) {
      play();
    }
  });


// Fonctions  et événementspour tous les boutons des 4 couleurs
function one() {
  if (noise) {
    let audio = document.getElementById("audio1");
    audio.play();
  }
  noise = true;
  buttonupleft.style.backgroundColor = "#04ff00";
}

buttonupleft.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(1);
      check();
      one();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })

function two() {
  if (noise) {
    let audio = document.getElementById("audio2");
    audio.play();
  }
  noise = true;
  buttonupright.style.backgroundColor = "#ef00ff";
}

buttonupright.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(2);
      check();
      two();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })

function three() {
  if (noise) {
    let audio = document.getElementById("audio3");
    audio.play();
  }
  noise = true;
  buttondownleft.style.backgroundColor = "#ff7600";
}

buttondownleft.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(3);
      check();
      three();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })

function four() {
  if (noise) {
    let audio = document.getElementById("audio4");
    audio.play();
  }
  noise = true;
  buttondownright.style.backgroundColor = "#00f3ff";
}

buttondownright.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(4);
      check();
      four();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })


// Couleur qui redevient normal (sombre)   
function clearColor() {
  buttonupleft.style.backgroundColor = "#23a521";
  buttonupright.style.backgroundColor = "#a321a5";
  buttondownleft.style.backgroundColor = "#a55e21";
  buttondownright.style.backgroundColor = "#2144a5";
}
// Flashcolor quand on séléctionne une couleur
function flashColor() {
  buttonupleft.style.backgroundColor = "#04ff00";
  buttonupright.style.backgroundColor = "#ef00ff";
  buttondownleft.style.backgroundColor = "#ff7600";
  buttondownright.style.backgroundColor = "#00f3ff";
}
// Partie gagner
function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
  }