function getComputerChoice(){
    let comChoice = Math.floor(Math.random() * 3); 
    console.log(`computer Choice ${comChoice}`);
    return Number(comChoice);    
}
function getHumanChoice(){
    let input = prompt("Choose 1 (0:Rock, 1:Paper, 2: Scissors)");
    console.log(`Human Choice ${input}`);
    return Number(input);
}
function playRound(humanChoice, computerChoice) 
{
    if(humanChoice === 0){
        if(computerChoice == 0){            
            return "Draw";
        }            
        else if(computerChoice === 1){            
            return "Computer";
        }
        else{            
            return "Human";
        }
    }
    else if(humanChoice === 1){
        if(computerChoice === 0){            
            return "Human";
        }        
    
        else if(computerChoice === 1){            
            return "Draw";
        }
        else{            
            return "Computer";
        }
    }
    else
    {
        if(computerChoice === 0){            
            return "Computer"
        }            
        else if(computerChoice === 1){           
            return "Human";
        }
        else{            
            return "Draw"
        }
    }
}
function playGame(t=5){
    let humanScore = 0;
    let computerScore = 0;    
    for(let i = 0; i< t;i++){
        console.log(`########Round ${i+1}#######`);
        let resultx = playRound(getHumanChoice(),getComputerChoice())        
        if (resultx === "Human"){
            console.log("****Human +1");
            humanScore++;
        }
        else if (resultx === "Computer"){
            console.log("****Computer +1");
            computerScore++;
        }else{
            i--;
        }       
    } 
    console.log(`Player: ${humanScore} Computer: ${computerScore}`);   

}

playGame(5);





