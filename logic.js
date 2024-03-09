let userScore = 0;
let compScore = 0;
const choice = document.querySelectorAll(".choice");
const btn = document.querySelector("button");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userScore");
const computerScorepara = document.querySelector("#computerScore");


const compChoice = () => {
    const options = ["rock", "paper", "scessiors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const gameDraw = () =>{
    console.log("The game was draw");
    msg.innerText = "Game was draw, play again...!";
    msg.style.backgroundColor = "#071524";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin == true){
        userScore++;
        msg.innerText = `YOU Win..!  your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#386641";
        userScorepara.innerText = userScore;
    }

    else{
        compScore++;
        console.log(`You Loose..!`);
        msg.innerText = `You Loose..! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#bc4749";
        computerScorepara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);

    const computerChoice = compChoice();
    console.log(`Computer's Choice = ${computerChoice}`);

    if(userChoice == computerChoice)
    {
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {   //scessiors, paper
            userWin = computerChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper")
        {   //rock, scessior
            userWin =  computerChoice === "scessiors" ? false : true;
        }

        else{
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        console.log(userWin);
        showWinner(userWin, userChoice, computerChoice);
    }
}


choice.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});