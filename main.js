/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/classes/playing-field.js

class PlayingField {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.position = 16;
  }
  createField() {
    const divGame = document.createElement("div");
    this.parentElement.append(divGame);
    divGame.classList.add("game");
    const menuText = `<div class = "menu">
                        <span>Попадений: </span><span class="hits">0</span><br>
                        <span>Промахов/пропусков: </span><span class="misses">0</span><br>
                        <button type="button" class="start-game">Начать игру</button><br>
                      </div>
                      <div class="field">
                        <div class = "cell" data-id="0">
                          <img src="${goblin_namespaceObject}" alt = "Гоблин" class = "goblin goblin-hidden">
                        </div>
                      </div>`;
    divGame.innerHTML = menuText;
    const divField = divGame.querySelector(".field");
    for (let i = 0; i < 15; i++) {
      const item = divField.querySelector(".cell").cloneNode(true);
      item.dataset.id = i + 1;
      divField.appendChild(item);
    }
  }
  goblinFlicker() {
    this._randomСell();
    this._randomСell = this._randomСell.bind(this);
    setInterval(this._randomСell, 1000);
  }
  _randomСell() {
    let num = 0;
    do {
      num = Math.floor(Math.random() * 16);
    } while (this.position == num);
    this.position = num;
    if (this.parentElement.querySelector(".goblin-visible")) {
      let elemOld = this.parentElement.querySelector(".goblin-visible");
      elemOld.classList.replace("goblin-visible", "goblin-hidden");
    }
    let elemNew = this.parentElement.querySelectorAll(".goblin")[this.position];
    elemNew.classList.replace("goblin-hidden", "goblin-visible");
  }
}
;// CONCATENATED MODULE: ./src/js/classes/game.js

class Game {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.playingField = new PlayingField(this.parentElement);
    this.playingField.createField();
  }
  waitingStart() {
    this.btStart = this.parentElement.querySelector(".start-game");
    this.start = this.start.bind(this);
    this.btStart.addEventListener("click", this.start);
  }
  start() {
    this.btStart.setAttribute("disabled", true);
    this.playingField.goblinFlicker(this.btStart);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementsByTagName("body")[0];
  const game = new Game(body);
  game.waitingStart();
});
;// CONCATENATED MODULE: ./src/index.js




// TODO: write your code in app.js
/******/ })()
;