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
    
    console.log(playerGuess)
    console.log(lettersGuessed)
    
    var letterLocation = function() {
       var alphaSpot = lettersGuessed.indexOf(playerGuess);
       return alphaSpot;
    };
    console.log(letterLocation())
    
    var addLetter = function () {
        var newLettersGuessed = lettersGuessed.push(playerGuess);
        return newLettersGuessed;
    };
    console.log(addLetter())
    


    
    //var addGuess = function () {
        //if letterLocation() = -1 {
            //lettersGuessed.push(playerGuess);
            //} else {
                //console.log("Sorry. Letter already guessed.");
            //}
                
        //};
    //};
};
    
    
            
            
            
            
            

// for (var wins = 0; )