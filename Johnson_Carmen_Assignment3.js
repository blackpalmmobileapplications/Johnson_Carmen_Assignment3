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
var upRange = function() {
              if(true) { yell("Let's go" + top.rank + "we are ready!");
              } else { yell("The other " + vehi + " will beat us there!");
}; };

            yell("We won't make it on time if our " + vehi + " don't leave right now!!");
//            yell("If we are not there in " + json.Times.length + " we are in trouble!");

//json array1 for loop     (I stopped the json scripts from running, but wanted to show you the work here as well
//var listTimes = function(json) {
//          for(var i = 0; i < json.Times.length; i++) {         var Time = json.Times[i];
//       yell("rank: "+ Time.rank + " ,name: " + Time.name + ",yearsServed: " + Time.yearsServed);
//};  
