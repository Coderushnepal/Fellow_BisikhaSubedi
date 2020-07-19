//Q1.  Write a function that returns the longest sequence of consecutive zeroes in a binary string

var longestZero = function(input) {
    return input.split(1).sort().pop();
}

// console.log(longestZero("01100001011000"));
// console.log(longestZero("100100100"));
// console.log(longestZero("11111"));



// Q2. Create a function that takes a string and replaces the vowels with another character.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

var obj = {
    a:1,
    e:2,
    i:3,
    o:4,
    u:5
};

var recieveString = function(name) {
    name.split('').map(function (value){ 
        return obj[value] ? obj[value]: value
    }).join('')
}

console.log(recieveString("karachi"));


// var recieveString = function(string) {
//     var vowelarr = Object.entries(obj);

//     vowelarr.map(function(value){
//         if(string.includes(value[0])) {
//             return value[1];
//         }
//     });
// }




// replaceVowel("karachi") ➞ "k1r1ch3"
// replaceVowel("chembur") ➞ "ch2mb5r"
// replaceVowel("khandbari") ➞ "kh1ndb1r3"


