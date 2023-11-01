import data from './rawBooks.json' assert { type: 'json' };
//console.log(data[0]["# Pages"]);
//what percent of books are read
var numOfRead = 0;
for (var i = 0; i< data.length; i++) {
    if (data[i]["read?"] == "Yes") {
        numOfRead++;
    }
}
var percentRead = numOfRead/data.length;
//console.log(percentRead);

//ave time book time from point of purchase to point read
var totalTime = 0;
for (var i = 0; i< data.length-3; i++) {
    if (data[i]["read?"] == "Yes") {
        totalTime = totalTime + data[i]["Time on TBR (days)"];
    }    
    console.log(totalTime);
}
console.log(totalTime/data.length);

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));