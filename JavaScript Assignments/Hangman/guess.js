var guessedWords = new Set();
var wrongWords = new Set();
var rightWords = new Set();

// Get the letters from the keypress event and add to the guessedWords

function getPressedKey() {
    document.addEventListener ('keypress' , function(event){
        var compareLetter = guessedWords.add(event.key).values();
        var compareLetterArray = Array.from(compareLetter);
         for ( j= 0; j < randomFellowName.length; j++ ) {
             if (compareLetterArray.pop() == randomFellowName[j]) {
                 console.log('MILYO');
                 // letters.innerHTML = randomFellowName[j];
             } 
         }
     });
}

function compareMatchWord() {
    document.addEventListener ('keypress' , function(event) {
        var pressedLetter = event.key;
        // to store the record of pressed keys
        guessedWords.add(pressedLetter);

        for (var j=0; j < randomFellowName.length; j++) {
            if (pressedLetter == randomFellowName[j]) {
                displayRightGuess(pressedLetter , j);
                // console.log(pressedLetter);
            } else {
                // displayWrongGuess(value);
            }
        } 
    })
}

// Displayes the matched letters received from compareMatchWord()
function displayRightGuess(value, index) {
    // var letterContainer = document.querySelector('.letter');
    const letterContainer = document.getElementById('letter-container').children[index];
	letterContainer.innerHTML = value;
}

function displayWrongGuess(value) {
    var wrongLetters = document.createElement('div');
    wrongLetters.innerHTML = 'Wrong Letters';
}

compareMatchWord();







