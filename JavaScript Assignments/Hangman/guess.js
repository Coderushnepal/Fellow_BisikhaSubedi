// set.has(value) – returns true if the value exists in the set, otherwise false .

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
        if (randomFellowName.includes(pressedLetter)) {
            for (var j=0; j < randomFellowName.length; j++) {
                if (pressedLetter == randomFellowName[j]) {
                    displayRightGuess(pressedLetter , j);
                      console.log(pressedLetter);
                
                }
            } 
        }else {
            wrongWords.add(pressedLetter);
            displayWrongGuess(wrongWords);
        }
       
    });
}

// Displayes the matched letters received from compareMatchWord()
function displayRightGuess(value, index) {
    // var letterContainer = document.querySelector('.letter');
    const letterContainer = document.getElementById('letter-container').children[index];
	letterContainer.innerHTML = value;
}

var figureParts = document.getElementsByClassName('figure-part');
// console.log(figureParts);
window.onload = function() {
   Array.from(figureParts).forEach((value) => {
        value.style.visibility = 'hidden';
   });
};

function displayWrongGuess(wrongWords) {
    // console.log(wrongWords); //Set of wrong letters aairako chha
    var wrongLetterContainerr = document.getElementById('wrong-letter-container');
    wrongLetterContainerr.innerHTML = "Wrong Guess" +' :'+ Array.from(wrongWords).join(',');
    document.body.appendChild(wrongLetterContainerr);
    
    // display figure parts
    displayFigureParts();

    if(Array.from(wrongWords).length > figureParts.length) {
        alert('Game Over');
    }
}

// To display the figure parts
var k = 0;
function displayFigureParts() {
    // console.log(figureParts[k]);
    figureParts[k].style.visibility = 'visible';
    k++;
}


compareMatchWord();







