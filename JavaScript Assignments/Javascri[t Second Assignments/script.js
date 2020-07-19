//Q1. namelist lai array of fellow ma break, then each fellow name lai split

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

var fellows = function(array) {
	return array.map(function(value, index) {
		var obj = {};
		var name = value.split(' ');
		obj['id'] = index + 1;
		obj['firstName'] = name[0].charAt(0).toUpperCase() + name[0].slice(1);
		obj['lastName'] = name[1].charAt(0).toUpperCase() + name[0].slice(1);
		// console.log(obj);
		return obj;
	});
};

console.log(fellows(nameList));

// Q2. Alphabet Count 

var alphabetCount = function(array, char) {
	var getArrayFromQ1 = fellows(array);
	var finder = getArrayFromQ1.filter(function(value) {
		return value.firstName.charAt(0).toUpperCase() == char.toUpperCase();
	});
	var startingWith = finder.length;
	var startingWithout = getArrayFromQ1.length - startingWith;
	return char + ': ' + startingWith + ' and ' + startingWithout;
};

console.log(alphabetCount(nameList, 's'));
console.log(alphabetCount(nameList, 'a'));
console.log(alphabetCount(nameList, 'k'));
console.log(alphabetCount(nameList, 'r'));


// Q3

var result3 = function(array) {
	var getArrayFromQ1 = fellows(array);
	var organized = getArrayFromQ1.reduce(function(acc, value, index) {
		var storeId = value.id;
		delete value.id;
		acc[storeId] = value;
		return acc;
	}, {});
	return organized;
};

console.log(result3(nameList));

// Q4
var sequence = function(str) {
	return str.split('1').sort().pop();
};

console.log(sequence('1110011000001100'));

// Q5

var obj ={
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


// name.split('').map(function (value){ 
// return obj[value] ? obj[value]: value
// }).join('')