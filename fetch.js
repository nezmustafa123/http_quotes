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
        // console.log(JSON.stringify(data));

        data = randomise(data);

        let output = "";

        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break; //break out of the loop after certain iterations
          }
          output += `
            <li>Quote: ${data[i].text}</li>
            <li>Author: ${data[i].author}</li>
            <hr>
            `;
        }
        document.querySelector(".quotes").innerHTML = output;
      });
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
    //decrease c1 by 1 because of zero index
    currentIndex--;
    //swap last element with current index

    tempValue = quotes[currentIndex];
    quotes[currentIndex] = quotes[randomIndex];
    console.log(quotes[randomIndex]);
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
