alert("JavaScript works!");
// Carmen Earl Johnson
//SDI Project 3
//05/17/2012


//Global variables
var yell = function(message) {console.log(message);
};
 
var tanks = 4
var crew = 16  
var vehi = tanks
    tanknames = ["Men of War", "Duds", "commander", "master gunner"];

//object for top aka First Sargeant

var top = {"rank": "First Sargeant",
           "age" :  40,
           "officer": false,
           "name": "commander",
            downrange:function (mission) {
                yell("We are about to show " + tanknames[1] + " how to hit some target!");
},

          smokeGen: function() 
               { yell("All companies!! Start your engines!");
} };

//Procedure