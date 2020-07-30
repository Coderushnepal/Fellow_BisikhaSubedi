//Q1. namelist lai array of fellow ma break, then each fellow name lai split
console.log('Answer 1');
var nameList = `Neeta sapkota
Neha shiwakoti
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
nameList = nameList.split('\n');

var result = nameList.map(function(value, index) {
	var obj = {};
	var name = value.split(' ');
	var firstName = name[0];
	var lastName =	name[1];

	obj['id'] = index + 1;
	obj['firstName']  = firstName[0].toUpperCase().concat(firstName.substring(1));;
	obj['lastName']   = lastName[0].toUpperCase().concat(lastName.substring(1));;
	return obj;
});

console.log(result);

console.log('\n');

// Q2. Alphabet Count 
console.log('Answer 2');

function find(char) {
    var finder = result.filter(function(value) {
        return value.firstName.charAt(0) === char.toUpperCase();
	});
	return char + ': ' + (finder.length) + ' and ' + (result.length - finder.length);
}

console.log(find('s'));
console.log(find('a'));

console.log('\n');

// Q3
console.log('Answer 3');

var final = result.reduce(function(acc,value,index){
	var storeId = value.id;
	delete value.id;
	acc[storeId] = value;
	return acc;
},{});

console.log(final);
console.log('\n');

// Q4
console.log('Answer 4');

var sequence = function(str) {
	return str.split('1').sort().pop();
};

console.log(sequence('1110011000001100'));

console.log('\n');

// Q5
console.log('Answer 5');
var vowels ={
    a: 1,
    e: 2,
    i: 3,
    o: 4, 
    u:5
}
var replaceVowel = function(str) {
	return str.split('').reduce(function(acc, char) {
		return vowels[char] == undefined ? acc.concat(char) : acc.concat(vowels[char]);
	}, '');
};

console.log(replaceVowel('karachi'));
console.log(replaceVowel('chembur'));
console.log(replaceVowel('khandbari'));

// name.split('').map(function (value){ 
// return obj[value] ? obj[value]: value
// }).join('')