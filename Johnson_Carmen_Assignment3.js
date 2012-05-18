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

//listTimes(json);

//yell("We have:" + json2.jeeps.length + "  jeeps if the " + vehi + " are too slow, and we can have the " + vehi + " drivers drive the " + vehi + " there.");

//json array2 for loop

//var listJeeps = function (json2) {
//   for (var i = 0; i < json2.jeeps.length; i++) {
     
//   var jeep = json2.jeeps[i];
//    yell("name: " + jeep.name + ",tanks: " + jeep.tanks + ",crew: " + jeep.crew + ", vehi: " + jeep.vehi);

//};  

//listJeeps(json2);

//local array for loop
yell("The whole battalion has " + crew + vehi + " and our company has " + tanknames.length + vehi + ".");
for (var i = 0, c = tanknames.length; i < c; i++) {
};

yell(" In order for our company to sign in on time, we will need find the fastest way to get to the range.");

//Boolean comparison
var lateEarly = function(tanks, crew) {
if (tanks >= 3 && crew >= 14) {
var onTime = "We have " + tanks + " tanks and " + crew + ",jeeps; so that will be enough to get everyone there on time to sign in at the range control.";

       return onTime
}; 
      if (tanks<3 || crew<14); {
      var late = " We do not have enough room to get everyone there on time to sign in."
      return late
}; };

var onTime = lateEarly(tanks, crew);
yell(onTime || late);
(true);   
