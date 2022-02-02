const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert("Enter a number please");
  } else {
    fetch(URL) ///url in variable
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(JSON.stringify(data));
      });
  }
}
