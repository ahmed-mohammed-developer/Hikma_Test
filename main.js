let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let hikmaDisplay = document.querySelector(".hikma-display");
let hikmaId = document.querySelector(".hikma-id");
let hikmAuthor = document.querySelector(".hikma-author");
let autoStatus = document.querySelector(".auto-status");
let intervalId;

generateBtn.onclick = generateQuote;
autoBtn.onclick = startAutoPlay;
stopBtn.onclick = stopAutoPlay;



async function getQuotes() {
     const response = await fetch("hikma.json");
     const data = await response.json();
     return data;
}

async function generateQuote() {
     const quotes = await getQuotes();
     const quote = quotes[Math.floor(Math.random() * quotes.length)];
     hikmaDisplay.innerHTML = quote.text;
     hikmaId.innerHTML = quote.id;
     hikmAuthor.innerHTML = quote.author;
}

function startAutoPlay() {
     intervalId = setInterval(generateQuote, 10000);
     autoStatus.innerHTML = "العرض الآلي يعمل"
}

function stopAutoPlay() {
     clearInterval(intervalId);
     autoStatus.innerHTML = ""
}
