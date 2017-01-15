var async = require('async');

function traffic_light(direction, status) {
  this.direction = direction;
  this.status = status;
  var light_type = ["red", "yellow", "green"];
  var _self = this;

  var change_order_length = change_order.length;

  this.redToGreen = function () {
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
};

var change_order = [
  ["RGLightInt", 4000],     // 5 mins
  ["YLightInt", 1000],  // 4 mins 30 s
];
var change_order_length = change_order.length;
var change_order_index = 0;

function trafficLightGroup(northLight, southLight, westLight, eastLight, change_order, change_order_length, change_order_index) {
  //var waiting_time = change_order[change_order_index % change_order_length][1];

  //console.log(waiting_time);
  setTimeout(function () {
    if (northLight.status === "red" && westLight.status === "green") {
      westLight.greenToYellow();
      eastLight.greenToYellow();
      console.log("-------------------")
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
    change_order_index ++;
    trafficLightGroup(northLight, southLight, westLight, eastLight, change_order, change_order_length, change_order_index);
  }, change_order[change_order_index % change_order_length][1]);
}



var northLight = new traffic_light("north", "red");
var southLight = new traffic_light("south", "red");
var westLight = new traffic_light("west", "green");
var eastLight = new traffic_light("east", "green");


trafficLightGroup(northLight, southLight, westLight, eastLight, change_order, change_order_length, change_order_index);







