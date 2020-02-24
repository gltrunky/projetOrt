export class Card {
  static cptInstance = 0;
  static listRandomNb = [];
  static cards = [];

  constructor() {
    Card.cptInstance++;

    this.state = {
      returned: false,
      founded: false
    };

    this.init();
  }

  init() {
    this.html = document.createElement("div");

    this.html.className = "card";
    this.html.innerHTML = `
      <div class="back"></div>
      <div class="front"></div>
    `;

    this.frontFaceHtml = this.html.querySelector(".front");

    this.generateRandomNb();
    Card.cards.push(this);

    this.html.addEventListener("click", () => {
      this.state.returned = this.html.classList.toggle("flipped");

      const cardsReturned = Card.cards.filter(
        c => c.state.returned && !c.state.founded
      );

      if (cardsReturned.length === 2) {
        const card1 = cardsReturned[0];
        const card2 = cardsReturned[1];

        if (
          card1.frontFaceHtml.textContent === card2.frontFaceHtml.textContent
        ) {
          cardsReturned.forEach(c => {
            c.state.founded = true;
          });

          const cardsFounded = Card.cards.filter(c => c.state.founded);

          if (cardsFounded.length === Card.cards.length) {
            alert("Bravo");
            document.querySelector(".filter").style.display = "block";
          }
        } else {
          setTimeout(() => {
            cardsReturned.forEach(c => {
              c.state.returned = false;
              c.html.classList.remove("flipped");
            });
          }, 700);
        }
      }
    });
  }

  generateRandomNb() {
    if (Card.cptInstance % 2) {
      let randomNb = Math.ceil(Math.random() * 20);

      if (!Card.listRandomNb.includes(randomNb)) {
        Card.listRandomNb.push(randomNb);
      } else {
        this.generateRandomNb();
      }
    }

    this.frontFaceHtml.textContent =
      Card.listRandomNb[Card.listRandomNb.length - 1];
  }
}
