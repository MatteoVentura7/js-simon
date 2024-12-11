const displayElm = document.getElementById("display");
const Num1Elm = document.getElementById("num1");
const Num2Elm = document.getElementById("num2");
const Num3Elm = document.getElementById("num3");
const Num4Elm = document.getElementById("num4");
const Num5Elm = document.getElementById("num5");



const NumsCard = document.getElementById("nums");
const FormElm = document.getElementById("form");
const FormElm2 = document.getElementById("form2");
const DisplayInline = document.querySelector(".d-none");
const DisplayNone = document.querySelector(".d-none-input");
const MessCard = document.getElementById("message")

const btnElm = document.getElementById("button2");

const randomNumbers = [];
FormElm.addEventListener("submit",function(event) {
    event.preventDefault();

    
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
      NumsCard.innerHTML = randomNumbers;
      
    

    let second =30;

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



FormElm2.addEventListener("submit",function(event) {
    event.preventDefault();



    userNumbers = [
        Number(Num1Elm.value),
        Number(Num2Elm.value),
        Number(Num3Elm.value),
        Number(Num4Elm.value),
        Number(Num5Elm.value),
    ];

    console.log(userNumbers)
    console.log(randomNumbers)

    let correctNumbers = [];

    for (let i = 0; i < userNumbers.length; i++) {
        let numberschecked = userNumbers[i];
        if (randomNumbers.includes(numberschecked)) {
            correctNumbers.push(numberschecked)
        }
    }

    if (correctNumbers.length === 0) {
        MessCard.innerHTML = "Ritenta";
    } else {
        MessCard.innerHTML = `Hai indovinato i seguenti numeri: (${correctNumbers})`;
    }
} )