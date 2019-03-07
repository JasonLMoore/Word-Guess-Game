var pokemonNames = ["bulbasaur", "ivysaur", "venusaur", "squirtal", "wartortal", "blastoise", "charmander", "charmelion", "charizard"];
 

var pickPoke = function() {
    var randomPoke = pokemonNames[Math.floor(Math.random()*pokemonNames.length)];
    return randomPoke;
    
  
};
console.log(pickPoke())




var userText = document.getElementById("guess")
document.onkeyup = function(event) {
    console.log(event.key)
    userText.textContent = event.key
};

var wins = 0;

// for (var wins = 0; )