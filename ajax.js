const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();
  const https = new XMLHttpRequest(); //instantiate
  https.open("GET", "https://type.fit/api/quotes", true);
  https.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  https.send();
}
