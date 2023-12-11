const apiUrl = "https://api.quotable.io/quotes/random";
const Quote = document.getElementById("quote");
const Author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  Quote.innerHTML = data[0].content;
  Author.innerHTML = data[0].authorSlug;
}
getQuote(apiUrl);

function Quotebtn() {
  getQuote(apiUrl);
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      Quote.innerHTML +
      "~ By" +
      Author.innerHTML,
    "Tweet Window",
    "width=600, height=400"
  );
}
