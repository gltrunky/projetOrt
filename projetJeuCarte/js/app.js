import { Constants } from "./constants.js";
import { Card } from "./card.js";

export class App {
  run() {
    const wrapperTag = document.querySelector(".wrapper");
    const cards = [];

    for (let i = 0; i < Constants.NB_CARDS; i++) {
      cards.push(new Card());
    }

    cards.sort(() => Math.random() - 0.5);

    for (let card of cards) {
      wrapperTag.appendChild(card.html);
    }
  }
}
