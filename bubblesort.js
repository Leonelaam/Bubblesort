let suitsCard = ["♦", "♥", "♣", "♠"];
let numbersCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let cards = [];


let btnDraw = document.getElementById("drawButton");
btnDraw.addEventListener("click", function () {
   
    let numberCards = document.getElementById("input").value;
    cards = generateCards(numberCards);
    console.log(cards)

    let card_container = document.getElementById("card_container");
    card_container.innerHTML = "";
    let card_container_sort = document.getElementById("card_container_sort");
    card_container_sort.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {

        if (cards[i].suit == "♣" || cards[i].suit == "♠") {
            card_container.innerHTML += `<div class="cardStyle">
        <div class="suit-top">
        <p class="suits" id="suit_top" style="color: black">${cards[i].suit}</p>
        </div>
        <div class="number" id="number">
        <p>${cards[i].number}</p>
        </div>
        <div class="suit-bottom">
        <p class="suits" id="suit_bottom" style="color: black">${cards[i].suit}</p>
        </div>
        </div>`
        } else {
            card_container.innerHTML += `<div class="cardStyle">
        <div class="suit-top">
        <p class="suits" id="suit_top" style="color: red">${cards[i].suit}</p>
        </div>
        <div class="number" id="number">
        <p>${cards[i].number}</p>
        </div>
        <div class="suit-bottom">
        <p class="suits" id="suit_bottom" style="color: red">${cards[i].suit}</p>
        </div>
        </div>`
        }
    }

});

function generateCards(numberCards) {
    let cards = [];
    for (let i = 0; i < numberCards; i++) {
        let suit = suitsCard[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
        let number = numbersCard[Math.floor(Math.random() * ((numbersCard.length - 1) - 0 + 1)) + 0];

        let card = {
            suit: suit,
            number: number
        }

        cards.push(card);

    }
    return cards;
}

let btnSort = document.getElementById("sortButton");
btnSort.addEventListener("click", function () {
    let cardsSort = bubbleSort(cards);
})

const bubbleSort = (cards) => {
    let wall = cards.length - 1;
    let iteration = 0;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            
            //numbersCard.indexOf("7") --> 5         >  //numbersCard.indexOf("J") --> 9
            if (numbersCard.indexOf(cards[index].number) > numbersCard.indexOf(cards[index + 1].number)) {
                let aux = cards[index];
                cards[index] = cards[index + 1];
                cards[index + 1] = aux;
                renderSortCards(cards, iteration);
                iteration++;
            }
            index++;
        }
        wall--; 
    }
    return cards;
};

function renderSortCards(cards, iteration) {
    let card_container_sort = document.getElementById("card_container_sort");
    let cardsInHTML = "";
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].suit == "♣" || cards[i].suit == "♠") {
            cardsInHTML += `<div class="cardStyle">
        <div class="suit-top">
        <p class="suits" id="suit_top" style="color: black">${cards[i].suit}</p>
        </div>
        <div class="number" id="number">
        <p>${cards[i].number}</p>
        </div>
        <div class="suit-bottom">
        <p class="suits" id="suit_bottom" style="color: black">${cards[i].suit}</p>
        </div>
        </div>`;
        } else {
            cardsInHTML += `<div class="cardStyle">
        <div class="suit-top">
        <p class="suits" id="suit_top" style="color: red">${cards[i].suit}</p>
        </div>
        <div class="number" id="number">
        <p>${cards[i].number}</p>
        </div>
        <div class="suit-bottom">
        <p class="suits" id="suit_bottom" style="color: red">${cards[i].suit}</p>
        </div>
        </div>`;
        }
    };
    card_container_sort.innerHTML += `<div class="card_container-sort-row"> 
                    <div class="iteration_num_container">
                    <p class="iteracion">${iteration}</p>
                    </div>
                    ${cardsInHTML}
                </div>`;
}













let btnDrawButton = document.getElementById("drawButton")
drawButton.addEventListener("click", function(){
    let Input = document.getElementById("input")
    let numberCard= Imput.Value
})
    let container = document.getElementById("conteiner")

    
    container.innerHTML = " ";
    for(let i = 0; i < numberCard; i++){
    
    container.innerHTNL += `<div class="cardStyle">
                <div class="simbol-top" id="suits">
                    <p>♣</p>
                </div>
            <div class="number-middle" id="number">
                <p>A</p>
            </div>
            <div class="simbol-buttom" id="suits2">
                <p>♣</p>
            </div>`
};
