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
            console.log("Draw! Redo");
        }            
        else if(computerChoice === 1){
            console.log("Paper Win! ComputerScore +1");
        }
        else{
            console.log("Rock Wins! PlayerScore +1");
        }
    }
    else if(humanChoice === 1){
        if(computerChoice === 0){
            console.log("Paper Win! PlayerScore +1");
        }        
    
        else if(computerChoice === 1){
            console.log("Draw! Redo");
        }
        else{
            console.log("Scissors Wins! ComputerScore +1");
        }
    }
    else
    {
        if(computerChoice === 0){
            console.log("Rock Wins! ComputerScore +1");
        }        
    
        else if(computerChoice === 1){
            console.log("Scissors Win! PlayerScore +1");
        }
        else{
            console.log("Draw! Redo");
        }
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);