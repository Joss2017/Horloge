// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let current = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables
let hours = current.getHours(); // +1 pour heure exact GMT +1
let minutes = current.getMinutes();
let secondes = current.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// let heure_rotation = 30 * heure;
// let minute_rotation = 6 * minute;
// let seconde_rotation = 6 * seconde;

let degreHours = hours * 60 * 60 + minutes * 60 + secondes * (360 / 43200); //43200 =secondes dans 1 tour de cadran soit 12h
let degreMin = (minutes * 60 + secondes) * 0.1; //
let degreSeconde = secondes * 6; // 6degrés

AIGUILLEHR.style.transform = "rotate(" + degreHours + "deg)";
AIGUILLEMIN.style.transform = "rotate(" + degreMin + "deg)";
AIGUILLESEC.style.transform = "rotate(" + degreSeconde + "deg)";

// Déplacer les aiguilles
function demarrerLaMontre() {
  //   AIGUILLEHR.style.transform = `rotate(${heure_rotation}deg)`;
  //   heure_rotation += 30 / 3600;
  //   AIGUILLEMIN.style.transform = `rotate(${minute_rotation}+${seconde_rotation}deg)`;
  //   minute_rotation += 6 / 60;
  //   AIGUILLESEC.style.transform = `rotate(${seconde_rotation}deg)`;
  //   seconde_rotation += 6;
  degreHours += 360 / 43200;
  degreMin += 0.1;
  degreSeconde += 6;
  AIGUILLEHR.style.transform = "rotate(" + degreHours + "deg)";
  AIGUILLEMIN.style.transform = "rotate(" + degreMin + "deg)";
  AIGUILLESEC.style.transform = "rotate(" + degreSeconde + "deg)";
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

console.log(demarrerLaMontre);
