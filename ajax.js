const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
function getQuotes(e) {
  e.preventDefault();

  if (number.length == 0) {
    return alert("Enter a number please");
  } else {
    const https = new XMLHttpRequest(); //instantiate
    https.open("GET", "https://type.fit/api/quotes", true);
    https.onload = function () {
      if (this.status === 200) {
        console.log(JSON.parse(this.responseText));
        const response = randomise(JSON.parse(this.responseText));
        let output = "";
        // response.forEach(function (quote) {
        //   output += `
        //   <li>Quote: ${quote.text}</li>
        //   <li>Author: ${quote.author}</li>
        //   <hr>

        //  `;
        // });

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break; //break out of the loop after certain iterations
          }
          output += `
          <li>Quote: ${response[i].text}</li>
          <li>Author: ${response[i].author}</li>
          <hr>
          `;
        }

        document.querySelector(".quotes").innerHTML = output;
      }
    };
    https.send();
  }
}

//FUNCTION TO RANDOMISE QUOTES

function randomise(quotes) {
  let currentIndex = quotes.length;
  let tempValue;
  let randomIndex;
  console.log(currentIndex);
  //while elements exists in the array
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    //decrease c1 by 1 because
    currentIndex--;
    //swap last element with current index

    tempValue = quotes[currentIndex];
    quotes[currentIndex] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
