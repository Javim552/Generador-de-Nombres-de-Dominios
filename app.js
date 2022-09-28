/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/
var pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let dominio = "";
let p=0;
let a=0;
for (let i = 0; i < pronoun.length; i++) {
  dominio = pronoun[p] + adj[a] + noun[i] +".com";
  console.log(dominio);
  }
  for(let x= 0; x < pronoun.length; x++) {
    dominio2= pronoun[p] +adj[1] + noun[x]+".com";
    console.log(dominio2);
  }
  for (let j = 0; j < pronoun.length; j++) {
    dominio3 = pronoun[1] + adj[a] + noun[j] +".com";
    console.log(dominio3);

  }
  for (let k = 0; k < pronoun.length; k++) {
    dominio4 = pronoun[1] + adj[1] + noun[k] +".com";
    console.log(dominio4);
  }

/*
thegreatjogger.com
thegreatracoon.com
thebigjogger.com
thebigracoon.com
ourgreatjogger.com
ourgreatracoon.com
ourbigjogger.com
ourbigracoon.com 
*/