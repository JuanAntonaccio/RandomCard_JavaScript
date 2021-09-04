/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let lista = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let lista_palos = ["♦", "♥", "♠", "♣"];
const traerNumero = valor => {
  return Math.floor(Math.random() * valor);
};

function mostrar_carta() {
  let numero = document.querySelector(".numero");
  let ran = traerNumero(lista.length);
  let ran_palos = traerNumero(lista_palos.length);
  let palo1 = document.querySelector(".palo1");
  let palo2 = document.querySelector(".palo2");
  numero.innerHTML = lista[ran];
  palo1.innerHTML = lista_palos[ran_palos];
  palo2.innerHTML = lista_palos[ran_palos];
  let val_color = ran_palos < 2 ? "red" : "black";

  palo1.style.color = val_color;
  palo2.style.color = val_color;
}

window.onload = function() {
  //write your code here
  mostrar_carta();
};
document.getElementById("btn").onclick = function() {
  mostrar_carta();
};
//♦ ♥ ♠ ♣
