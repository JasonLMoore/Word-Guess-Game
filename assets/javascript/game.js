var pokemonNames = ["bulbasaur", "ivysaur", "venusaur", "squirtal", "wartortal", "blastoise", "charmander", "charmelion", "charizard"];
var wins = 0;
var userText;
var guessRemain;
var lettersGuessed = []

 

var pickPoke = function() {
    var randomPoke = pokemonNames[Math.floor(Math.random()*pokemonNames.length)]; 
    return randomPoke;
};
console.log(pickPoke())
document.getElementById("pokemon").innerHTML = pickPoke();







document.onkeyup = function(event) {
    var playerGuess = event.key;

    var letterLocation = function() {
        var alphaSpot = lettersGuessed.indexOf(playerGuess);
        return alphaSpot;
    };
    
    var addLetter = function () {
        var newLettersGuessed = lettersGuessed.push(playerGuess);
        return newLettersGuessed;
    };
    
    var checkLetters = function() {
        if (letterLocation() === -1){
            addLetter();
            
        } else {
            console.log("Sorry. This letter has already been guessed.")
        }
        
    };
    checkLetters()
    document.getElementById("letters-guessed").innerHTML = lettersGuessed;
    
};

    
    
    
    
    
    
    
    
    
    
            
            
            
            
            

// for (var wins = 0; )