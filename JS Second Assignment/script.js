//Q1. Convert list of name in array of objects
// Map function always returns an array, so whatever you return from the map function will be inside an array

var listOfNames = `Neeta sapkota
neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;

var fellowarr = listOfNames.split('\n');
var finalarray = fellowarr.map(function(value, index){
    var obj = {};
    var fullname = value.split(" ");

    var Name = fullname[0];
    var Cast = fullname[1];

    obj.id = index + 1;
    obj.firstName = Name[0].toUpperCase().concat(Name.substring(1));
    obj.lastName = Cast[0].toUpperCase().concat(Cast.substring(1));


    return obj;
});

// Q1. Answer
// console.log(finalarray);


// Q2. Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.
// finalarray vannay array ko value callback function ma gako chha which is object, object ko firstname ko char at 0 compare gareko chha
// filter lay pani map lay jastai array return garchaa, so return bhako array ko size calculate garna milchha.

function find(char) {
    var size = finalarray.filter(function(value) {
        return value.firstName.charAt(0) === char.toUpperCase();
    });

    var matches = size.length;
    var mismatch = finalarray.length - matches;

    console.log( matches + " and " + mismatch );
}

// Q2 answer
find('s');
find('a');