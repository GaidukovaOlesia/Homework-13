
packOfCards = [];
cardsValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"];
suits = ["clubs", "diamonds", "hearts", "spades"];

for(i = 0; i < suits.length; i++) {
    for (j = 0; j < cardsValue.length; j++) {
        card = "";
        if(j === 10) {
            card = `<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>
<div class="card-person">
<img src="images/jack.svg" alt="jack">
</div>
<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>`

        }
        if(j === 11) {
            card = `<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>
<div class="card-person">
<img src="images/queen.svg" alt="queen">
</div>
<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>`
        }
        if(j === 12) {
            card = `<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>
<div class="card-person">
<img src="images/king.svg" alt="king">
</div>
<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>`
        }
        if(j === 9) {
            card = `<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>
<div class="card-person">
<img src="images/${suits[i]}.svg" alt="A">
</div>
<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>`
        }
        if(j === 0 || j === 1 || j === 2
            || j === 3 || j === 4 || j === 5
            || j === 6 || j === 7 || j === 8) {
            card = `<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>
<div class="card-number">
<div class="card-info">${cardsValue[j]}</div>
    <div><img src="images/${suits[i]}.svg" alt = "${suits[i]}"></div>
</div>`
        }
        packOfCards.push(`<div class="card">${card}</div>`);
}
}
document.write(`<div class="wrapper">${packOfCards.join("")}</div>`)