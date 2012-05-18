//json array1 for loop

var listTimes = function(json) {
          for(var i = 0; i < json.Times.length; i++) {
          var Time = json.Times[i];
          yell("rank: "+ Time.rank + " ,name: " + Time.name + ",yearsServed: " + Time.yearsServed);
};  };

listTimes(json);

yell("We have:" + json2.jeeps.length + "  jeeps if the " + vehi + " are too slow, and we can have the " + vehi + " drivers drive the " + vehi + " there.");

//json array2 for loop

var listJeeps = function (json2) {
    for (var i = 0; i < json2.jeeps.length; i++) {
     
    var jeep = json2.jeeps[i];
    yell("name: " + jeep.name + ",tanks: " + jeep.tanks + ",crew: " + jeep.crew + ", vehi: " + jeep.vehi);

};  };

listJeeps(json2);
