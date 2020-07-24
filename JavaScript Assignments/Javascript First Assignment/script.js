// Astrick Pattern

function astrikPattern( n ) {
    for ( var i=1; i<=n; i++ ) {
        var stars = "";
        for( var j=n; j>=i; j-- ) {
        stars = stars.concat("* ");
        }          
    console.log (stars);
    }
}
astrikPattern(5);

// Q2

function inputstr ( stringg ) {
    var reveivedstring = stringg;
    var splittedarr = reveivedstring.split(" "); //array that containes individual string of whole string

    var finalString = "";

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

inputstr("Brown are colour fantastic is");

// Q3

function objtoarr ( obj ) {
    const array = Object.entries(obj);
    console.log(array);
}
var object = {
shrimp: 15, 
tots: 12
}
objtoarr(object);

// Q4
function identicalFunction( strarr ) {
    var emptyarr = [];
    for ( var i=0; i < strarr.length; i++ ) {
        var currentstr = strarr[i]; // 8888 , which is also a string

        for (var j=1; j <= currentstr.length; j++) {
            if ( currentstr.charAt(j) === currentstr.charAt(0) ) {
                emptyarr.push(currentstr);
            } else {
                emptyarr.push();
                break;
            }
        }
    }
    return emptyarr;
    console.log(emptyarr);
}

var pass = ["123", "999", "22", "545", "133"];

identicalFunction(pass);

// Q5
function KeysandValues( obj ) {
    console.log( Object.keys(obj) );
    console.log ( Object.values(obj) );
}       
var obj = {
    a: "Apple", 
    b: "Microsoft", 
    c: "Google" 
}

KeysandValues (obj);