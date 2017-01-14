var async = require('async');

function traffic_light(direction, status) {
  this.direction = direction;
  var light_type = ["red", "yellow", "green"];
  this.status = status;
  var _self = this;

  var change_order_length = change_order.length;

  this.redToGreen = function (cb) {
    if (this.status === "red") {
      this.status = light_type[2];
      // console.log("success: the light status is " + this.status);
    } else {
      // console.log("error: the light status is not red");
    };

  };

  this.greenToYellow = function () {
    if (this.status == "green") {
      this.status = light_type[1];
      // console.log("success: the light status is " + this.status);
    } else {
      // console.log("error: the light status is not green");
    };
  };

  this.yellowToRed = function () {
    if (this.status == "yellow") {
      this.status = light_type[0];
      // console.log("success: the light status is " + this.status);
    } else {
      // console.log("error: the light status is not yellow");
    };
  };

  this.trafficLightLoop = function () {
    console.log("------------");
    console.log(this.status);
    console.log(this);
    console.log(_self);
    console.log("------------");
    setTimeout(function () {
      if (_self.status === "red") {
        _self.redToGreen();
      } else if (_self.status === "green") {
        _self.greenToYellow()
      } else if (_self.status === "yellow") {
        _self.yellowToRed()
      }
      _self.traffic_light_loop();
    }, 3000);
  };

};

var change_order = [
  ["RedToGreen", 7000],     // 5 mins
  ["GreenToYellow", 3000],  // 4 mins 30 s
  ["YellowToRed", 7000]      // 30 seconds
];

function trafficLightGroup(northLight, southLight, westLight, eastLight, change_order) {
  setTimeout(function () {
    if (northLight.status === "red" && westLight.status === "green") {
      westLight.greenToYellow();
      eastLight.greenToYellow();
    } else if (northLight.status === "red" && westLight.status === "yellow") {
      northLight.redToGreen();
      southLight.redToGreen();
      westLight.yellowToRed();
      eastLight.yellowToRed();
    } else if (northLight.status === "green" && westLight.status === "red") {
      northLight.greenToYellow();
      southLight.greenToYellow();
    } else if (northLight.status === "yellow" && westLight.status === "red") {
      northLight.yellowToRed();
      southLight.yellowToRed();
      westLight.redToGreen();
      eastLight.redToGreen();
    }
    console.log("N: " + northLight.status + " S: " + southLight.status
             + " W: " + westLight.status + " E: " + eastLight.status);
    trafficLightGroup(northLight, southLight, westLight, eastLight, change_order);
  }, 3000);

}



var northLight = new traffic_light("north", "red");
var southLight = new traffic_light("south", "red");
var westLight = new traffic_light("west", "green");
var eastLight = new traffic_light("east", "green");


//northLight.trafficLightLoop();


trafficLightGroup(northLight, southLight, westLight, eastLight, change_order);







