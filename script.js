const displayElm = document.getElementById("display");



const NumsCard = document.getElementById("nums");
const FormElm = document.getElementById("form");
const DisplayInline = document.querySelector(".d-none");
const DisplayNone = document.querySelector(".d-none-input");


FormElm.addEventListener("submit",function(event) {
    event.preventDefault();

    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
      NumsCard.innerHTML = randomNumbers;
    
  
})