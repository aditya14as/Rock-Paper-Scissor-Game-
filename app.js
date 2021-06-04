let userScore=0;
let compScore = 0;
let draws = 0;
let humanScore = document.getElementById("humanScore");
let computerScore = document.getElementById("computerScore");
let drawsScore = document.getElementById("drawsScore");
let result = document.querySelector(".lastP");
let himages = document.getElementById("humanImg");
let cimages= document.getElementById("computerImg");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const newgame = document.getElementById("newgameId");

function imagefun(userChoice,computerChoice) {
    switch(userChoice+computerChoice){
        case "rs":
            himages.src = "img/ROCK.png";
            cimages.src= "img/SCISSORS.png";
            break;
        case "pr":
            himages.src = "img/PAPER.png";
            cimages.src= "img/ROCK.png";
            break;
        case "sp":
            himages.src = "img/SCISSORS.png";
            cimages.src= "img/PAPER.png";
            break;
        case "rp":
            himages.src = "img/ROCK.png";
            cimages.src= "img/PAPER.png";
            break;
        case "ps":
            himages.src = "img/PAPER.png";
            cimages.src= "img/SCISSORS.png";
            break;
        case "sr":
            himages.src = "img/SCISSORS.png";
            cimages.src= "img/ROCK.png";
            break;
        case "rr":
            himages.src = "img/ROCK.png";
            cimages.src= "img/ROCK.png";
            break;
        case "ss":
            himages.src = "img/SCISSORS.png";
            cimages.src= "img/SCISSORS.png";
            break;
        case "pp":
            himages.src = "img/PAPER.png";
            cimages.src= "img/PAPER.png";
            break;
    }
}     

function Computer(){
    const choices= ['r', 'p', 's'];
    const random= Math.floor(Math.random()*3);
    return choices[random];
}

function convert(letter){
    if(letter== "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice){
    imagefun(userChoice,computerChoice);
    userScore++;
    humanScore.innerHTML= userScore;
    computerScore.innerHTML= compScore;
    result.innerHTML= "Human Wins! " + convert(userChoice) + " beats " + convert(computerChoice);
}

function lose(userChoice,computerChoice){
    imagefun(userChoice,computerChoice);
    compScore++;
    computerScore.innerHTML=compScore;
    humanScore.innerHTML=userScore;
    result.innerHTML= "Computer Wins! " + convert(computerChoice) + " beats " + convert(userChoice);
}

function draw(userChoice,computerChoice){
    imagefun(userChoice,computerChoice);
    draws++;
    drawsScore.innerHTML=draws;
    humanScore.innerHTML= userScore;
    computerScore.innerHTML= compScore;
    result.innerHTML= "It's Draw! " + convert(computerChoice) + " draws " + convert(userChoice);
}

function restart(){
    userScore=0;
    compScore=0;
    draws=0;
    drawsScore.innerHTML=draws;
    humanScore.innerHTML= userScore;
    computerScore.innerHTML= compScore;
    result.innerHTML= "Choose your Element";
    himages.src="img/BLANK.png";
    cimages.src="img/BLANK.png";
}

function game(userChoice){
    let computerChoice= Computer();

    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
           win(userChoice,computerChoice);
           break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice);
            break;
    }

   
}

function main(){
    rock.addEventListener('click', function(){
        game("r");
    })

    paper.addEventListener('click', function(){
        game("p");
    })

    scissors.addEventListener('click', function(){
        game("s");
    })

    newgame.addEventListener('click', function(){
        restart();
    })

}

main();