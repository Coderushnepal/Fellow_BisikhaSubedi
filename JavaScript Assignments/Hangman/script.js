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
var randomFellow = fellows[Math.floor(Math.random() * fellows.length)].toLowerCase(); //barsha
var randomFellowName = randomFellow.split(''); //yesma fellow ko name in letters aairakochha // [b,a,r,s,h,a]

console.log(randomFellowName);  
var letterCount = function() {
    for( var i=0; i < randomFellowName.length; i++ ) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('letter');
        var divisions = document.getElementById('letter-container');
        divisions.appendChild(newDiv);
    }
}

letterCount();



// document.addEventListener ('keypress' , function(event){
//     // console.log(event);
//     for (j=0; j < randomFellowName.length; j++) {
//         if (event.key === randomFellowName[j]) {
//             console.log('MATCH');
//         } else {
//             console.log('OOPS');
//         }
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
// 	Array.from(bodyParts).forEach((part) => {
// 		part.style.visibility = 'hidden';
// 	});
// });