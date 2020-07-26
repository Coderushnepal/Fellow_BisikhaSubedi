var nameList = `Neeta
Neha
Srijana 
Smrity
Sami
Kirtee
Trija
Sindhu
Kusum
Elisha
Rachana
Barsha
Pooja
Bisikha
Kritika
Srijana`;

var fellows = nameList.split('\n');
var randomFellow = fellows[Math.floor(Math.random() * fellows.length)].toLowerCase();
