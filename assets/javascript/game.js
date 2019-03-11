var pokemonNames = ["bulbasaur", "ivysaur", "venusaur", "squirtal", "wartortal", "blastoise", "charmander", "charmelion", "charizard"];
var guessRemain = 5;
var wins = 0;
var lettersGuessed = []

 
// pokemon // 
var pickPoke = function() {
    var randomPoke = pokemonNames[Math.floor(Math.random()*pokemonNames.length)];
    
    console.log(randomPoke) 
    
    var hiddenPoke = randomPoke.replace(/[a-z]/gi, '?');
    return hiddenPoke;
};


var guessPoke = function() {
    document.onkeyup = function(event) {
        var playerInput = event.key;
        // l < length of hiddenPoke; //
        for (l = 0; l < ; l++) {
            if (playerInput = l) {
                hiddenPoke.replace(l, playerInput);
            }
        }
    };
};
document.getElementById("pokemon").innerHTML = pickPoke();
        
        
        






// guess remain //
var guessCount = function() {
    // if letter guessed != letters listed //
        // guessRemain - 1 //
    // when guessRemain === 0 //
        // alert (sorry. you lose.) //
        // run pickPoke() //

};
console.log(guessRemain)




// letters guessed //
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

// wins //
    // if no index pickPoke() = '?' //
        // wins = wins + 1 //
    // when wins = 10 //
        // alert(Congrats! You Win!) //
        // reset game //

// everything called //
guessPoke()
    
    
    
    
    
    
    
    
    
    
            
            
            
            
            

// for (var wins = 0; )