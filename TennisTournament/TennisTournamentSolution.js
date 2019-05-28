

function solution(P, C) {
    //Provide Your solution here 
    
    // pair the players to two by game
    // Math.floor to round down to whole number
    let numberOfPairedGames = Math.floor(P/2);
    let courts = Math.floor(C);
    
    if (courts === 0) return 0;
    if (numberOfPairedGames < courts) return numberOfPairedGames;
    if (numberOfPairedGames >= courts) return courts;
}

module.exports = solution;