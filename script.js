const displayElm = document.getElementById("display");
const Num1Elm = document.getElementById("num1");
const Num2Elm = document.getElementById("num2");
const Num3Elm = document.getElementById("num3");
const Num4Elm = document.getElementById("num4");
const Num5Elm = document.getElementById("num5");


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
    

    let second =1;

    const intervalID = setInterval(() => {
    if(second === 0) {
        clearInterval(intervalID);
        DisplayInline.classList.remove("d-none");
        DisplayNone.classList.remove("d-none-input");
    }
    else {
        displayElm.innerHTML = second;
        second--;
    }
    
}, 1000);
  
})