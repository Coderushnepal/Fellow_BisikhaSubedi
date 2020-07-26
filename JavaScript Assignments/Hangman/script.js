var titleDiv = document.createElement('div');
var heading = document.createElement('h1');
var subHeading = document.createElement('p');

titleDiv.id = 'titlediv';
titleDiv.classList.add('titlediv');
titleDiv.style.position = 'absolute';
titleDiv.style.textAlign = 'center';

heading.innerHTML = 'Hangman';
heading.style.fontWeight = 'bold';
heading.style.color = '#ffffff';


subHeading.innerHTML = 'Find the hidden word - Enter a letter';
subHeading.style.color = '#ffffff';

document.body.appendChild(titleDiv);
titleDiv.appendChild(heading);
titleDiv.appendChild(subHeading);

// Fetch the name of fellows
var fellows = nameList.split('\n');
var randomFellow = fellows[Math.floor(Math.random() * fellows.length)].toLowerCase();

var letterCount = function() {
    var randomFellowName = randomFellow.split('');
    
    for( var i=0; i < randomFellowName.length; i++ ) {
        var newDiv = document.createElement('div');
        newDiv.id = randomFellowName[i];
        document.body.appendChild(newDiv);
    }
}

letterCount();