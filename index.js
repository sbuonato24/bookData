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
    if (data[i]["read?"] == "Yes" && data[i]["Time on TBR (days)"] != "N/A") {
        var num = parseInt(data[i]["Time on TBR (days)"]);
        totalTime = totalTime + num;
    }    
}
//console.log(totalTime/data.length); //in days

//fave genre
const genres = [];
const genres2 = [];
for (var i = 0; i< data.length; i++) {
    if(genres.includes(data[i].category) == false) {
        genres.push(data[i].category)
    }
}


for (var i = 0; i< data.length; i++) {
    genres2.push(data[i].category);
}
var one;
var highest = 0;
var highestGenre = ""
for (var i = 0; i<genres.length; i++) {
    for (var x = 0; x<genres2.length; x++) {
        if (genres[i] == genres2[x]) {
            one++;
        }
    }
    if (one>highest) {
        highest = one;
        highestGenre = genres[i];
    }
    one = 0;
}

//console.log(highestGenre);

//what author have I read the most

const authors = [];
const authors2 = [];
for (var i = 0; i< data.length; i++) {
    if(authors.includes(data[i].author) == false) {
        authors.push(data[i].author)
    }
}

for (var i = 0; i< data.length; i++) {
    authors2.push(data[i].author);
}
var two;
var highestTwo = 0;
var highestAuthor = ""
for (var i = 0; i<authors.length; i++) {
    for (var x = 0; x<authors2.length; x++) {
        if (authors[i] == authors2[x]) {
            two++;
        }
    }
    if (two>highestTwo) {
        highestTwo = one;
        highestAuthor = authors[i];
    }
    two = 0;
}
//console.log(highestAuthor);

//how long until favorite genre (gay fantasy) is read (average)
var totalTimeFav = 0;
var numFavGenre = 0;
for (var i = 0; i< data.length-3; i++) {
    if (data[i]["read?"] == "Yes" && data[i]["Time on TBR (days)"] != "N/A" && data[i].category == "Gay Fantasy") {
        var num = parseInt(data[i]["Time on TBR (days)"]);
        totalTimeFav = totalTimeFav + num;
        numFavGenre++;
    }
    
}

console.log(totalTimeFav/numFavGenre);

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));