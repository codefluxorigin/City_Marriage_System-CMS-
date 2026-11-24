
let quotes = document.getElementsByClassName("quote-content");

let currentQuote = 0;

function changeQuote() {

    quotes[currentQuote].classList.remove("active");

    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    quotes[currentQuote].classList.add("active");

}

setInterval(changeQuote, 5000);