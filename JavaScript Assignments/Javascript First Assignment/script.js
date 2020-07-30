// Astrick Pattern

console.log ("Answer 1");

function astrikPattern( n ) {
    for ( var i=1; i<=n; i++ ) {
        var stars = "";
        for( var j=n; j>=i; j-- ) {
        stars = stars.concat("* ");
        }          
    console.log (stars.trim());
    }
}
astrikPattern(5);
console.log('\n');


// Q2
console.log("Answer 2");

// ------------------consider this code----------------------
function censor(str) {
	let result = '';
	words = str.split(' ');
	// console.log(words);
	for (i = 0; i < words.length; i++) {
		var len = words[i].length;
		if (len > 4) {
			result = result + '*'.repeat(len) + ' ';
		} else {
			result = result + words[i] + ' ';
		}
	}
	return result;
}
// -------------------------------------------------------------

function inputstr ( stringg ) {
    var reveivedstring = stringg;
    var splittedarr = reveivedstring.split(" "); //array that containes individual string of whole string

    var finalString = " ";

    for ( var i=0; i< splittedarr.length; i++ ) {
        
        var individualstr = splittedarr[i];
        var length = individualstr.length;
        
        if (length > 4) {          
                var replacestr = " ";
                for( var j=0; j<length; j++ ){ 
                    replacestr = replacestr.concat("*");
                    }             
                var individualstr = replacestr + ' ';
                // console.log(individualstr); 
            } 
            var finalString = finalString.concat(individualstr);
    }
    console.log(finalString);
}

inputstr("Brown are colour fantastic the");
// inputstr("The code is fourty"); 
// inputstr("Two plus three is five");
// inputstr("aaaa aaaaa 1234 12345");
console.log('\n');




// Q3

// ------------------My initial Code------------------
function objtoarr ( obj ) {
    const array = Object.entries(obj);
}
var object = {
shrimp: 15, 
tots: 12
}
objtoarr(object);
// --------------------------------------------------------

console.log("Answer 3");

function objToArray(object) {
    var keys = Object.keys(object);
    var finalarr = [];

    keys.forEach(function(value , index) {
        finalarr.push([keys[index] , object[keys[index]]]);
    });
    console.log(finalarr);
}

var object = {
shrimp: 15, 
tots: 12
}
objToArray(object);

console.log('\n');

// Q4
console.log("Answer 4");

//--------------------Mine ----------------------------------------------------
function identicalFunction( strarr ) {
    var receivedarr = strarr;
    var emptyarr = [];
    for ( var i=0; i < receivedarr.length; i++ ) {
        var currentstr = receivedarr[i]; // 8888 , which is also a string

        for (var j=1; j <= currentstr.length; j++) {
            if ( currentstr.charAt(j) === currentstr.charAt(0) ) {
                emptyarr.push(currentstr);
            } else {
                emptyarr.push();
                break;
            }
        }
    }
    console.log(emptyarr);
    return emptyarr;  
}

identicalFunction(["123", "999", "22", "545", "133"]);
//-----------------------------------------------------------------------------------------
// identicalFunction(["xxxxo", "oxo", "xox", "ooxxoo", "oxo", "xxx"]);

console.log('\n');

console.log("Answer 5");

// Q5

function keysAndValues(obj) {
	let keys = Object.keys(obj);
	keys.sort();
	let values = [];
	for (i = 0; i < keys.length; i++) {
		values[i] = obj[keys[i]];
	}
	return [ keys, values ];
}

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));