// Convert list of name in array of objects

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
    obj.id = index + 1;

    var Name = fullname[0];
    var Cast = fullname[1];

    obj.firstName = Name[0].toUpperCase().concat(Name.substring(1));
    obj.lastName = Cast[0].toUpperCase().concat(Cast.substring(1));


    return obj;
});

console.log(finalarray);
