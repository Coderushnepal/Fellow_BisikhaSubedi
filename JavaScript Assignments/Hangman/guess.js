// set.has(value) – returns true if the value exists in the set, otherwise false .

var guessedWords = new Set();
var wrongWords = new Set();
// var rightWords = new Set();

// Get the letters from the keypress event and add to the guessedWords

function compareMatchTwo() {
    document.addEventListener('keypress' , function(event) {

    var alreadyGuessed = document.getElementById('already-guessed');
    document.body.appendChild(alreadyGuessed);

        if( Array.from(guessedWords).includes(event.key)) {
            
            console.log(alreadyGuessed);
            alreadyGuessed.style.display = 'block';
            alreadyGuessed.innerHTML = event.key +" has already been guessed";
            
        } else {
            alreadyGuessed.style.display = 'none';
            guessedWords.add(event.key);
             
            if (randomFellowName.includes(event.key)) {
                    for (var j=0; j < randomFellowName.length; j++) {
                        if (event.key == randomFellowName[j]) {
                            displayRightGuess(event.key , j);
                              console.log(event.key);
                        
                        }
                    } 
            }else {
                wrongWords.add(event.key);
                displayWrongGuess(wrongWords);
            } 
    
        }
    
    });
}
compareMatchTwo();

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

    if(Array.from(wrongWords).length === figureParts.length) {
        console.log('game over!!');
    }
}

// To display the figure parts
var k = 0;
function displayFigureParts() {
    // console.log(figureParts[k]);
    figureParts[k].style.visibility = 'visible';
    k++;
}









