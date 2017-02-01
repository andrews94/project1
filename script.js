var bank = new Array;
words = prompt('Enter a word to play').toUpperCase();
wordArray = words.split("")
// user enters a word to begin the game.




var wordRandom = wordArray; // the word to guess will be chosen from the array above
var newBank = new Array(wordRandom.length);
var error = 0;

// creates an underscore with a space inbetween for each letter
for (var i = 0; i < newBank.length; i++){
	newBank[i] = "_ "; // makes each letter in the word an _
}

// creates the guess field for each new game
function printnewBank(){
	for (var i = 0; i < newBank.length; i++){
	var field = document.getElementById("field");
	var letter = document.createTextNode(newBank[i]);
	field.appendChild(letter);  // appends the newbank to the "field" id.
	}
}

//checks if the users letter input matches a letter found within the word
var checkChar = function(){
	var f = document.hangman2.elements["userinput"].value.toUpperCase();
	// the letter provided by the user
	for (var i = 0; i < wordRandom.length; i++){
		if(wordRandom[i] == f){
			newBank[i] = f + " "; // if a letter from the word matches the letter the user input, replace the "_" with that user input.
			var check = true;
		}
	f.value = "";

	}

	//deletes the guessfield and replaces it with the new one
  var field = document.getElementById("field");
  field.innerHTML="";
  printnewBank();
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	 if (!check){
     var createLetter = document.getElementById("createLetter");
     var letter = document.createTextNode(" " + f);
     createLetter.appendChild(letter);
     error++; // increases value each time an incorect guess is made
     var hangman = document.getElementById("hangman");
     hangman.src = "imgs/hang" + error + ".png";
	}

	//checks if all letters have been found
	var end = true;
	for (var i = 0; i < newBank.length; i++){
		if(newBank[i] === "_ "){ //if the guess field still contains an "_", then the game is not over.
			end = false;
		}
	}
	if(end){
    sound2 ();
		window.alert("You win!");
	}

	//once you got eight wrong letters, you lose
	if(error === 8){
    sound1 ();
    window.alert("You died!");
	}
}


function init(){
	printnewBank();
}

window.onload = init; //initializes the game when the window loads, executes the printnewBank function

function sound1 (){ // audio sound function to play when the game is lost
  var audio = document.createElement("audio");
  audio.src = "scream.wav";
  audio.addEventListener("ended", function (){
    document.removeChild(this);
  }, false);
  audio.play ();
}

function sound2 (){ //audio sound function to play when the game is won
  var audio = document.createElement("audio");
  audio.src = "win.wav";
  audio.addEventListener("ended", function (){
    document.removeChild(this);
  }, false);
  audio.play ();
}
