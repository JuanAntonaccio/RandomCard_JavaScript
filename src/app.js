/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let lista = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let lista_palos = ["♦", "♥", "♠", "♣"];
  let numero = document.querySelector(".numero");
  let ran = Math.floor(Math.random() * 13);
  let ran_palos = Math.floor(Math.random() * 4);
  let palo1 = document.querySelector(".palo1");
  let palo2 = document.querySelector(".palo2");
  numero.innerHTML = lista[ran];
  palo1.innerHTML = lista_palos[ran_palos];
  palo2.innerHTML = lista_palos[ran_palos];
  if (ran_palos < 2) {
    palo1.style.color = "red";
    palo2.style.color = "red";
  }
};

//♦ ♥ ♠ ♣
