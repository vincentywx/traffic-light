function traffic_light(direction, status) {
  this.direction = direction;
  this.status = status;
  var light_type = ["red", "yellow", "green"];
  var _self = this;

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

function nLRedToGreen() {
  $('.traffic-light-n .bulb:nth-child(1)').removeClass("red");
  $('.traffic-light-n .bulb:nth-child(3)').addClass("green");
};
function nLGreenToYellow() {
  $('.traffic-light-n .bulb:nth-child(3)').removeClass("green");
  $('.traffic-light-n .bulb:nth-child(2)').addClass("yellow");
};
function sLRedToGreen() {
  $('.traffic-light-s .bulb:nth-child(1)').removeClass("red");
  $('.traffic-light-s .bulb:nth-child(3)').addClass("green");
};
function sLGreenToYellow() {
  $('.traffic-light-s .bulb:nth-child(3)').removeClass("green");
  $('.traffic-light-s .bulb:nth-child(2)').addClass("yellow");
};
function wLGreenToYellow() {
  $('.traffic-light-w .bulb:nth-child(3)').removeClass("green");
  $('.traffic-light-w .bulb:nth-child(2)').addClass("yellow");
};
function wLYellowToRed() {
  $('.traffic-light-w .bulb:nth-child(2)').removeClass("yellow");
  $('.traffic-light-w .bulb:nth-child(1)').addClass("red");
};

function eLGreenToYellow() {
  $('.traffic-light-e .bulb:nth-child(3)').removeClass("green");
  $('.traffic-light-e .bulb:nth-child(2)').addClass("yellow");
};
function eLYellowToRed() {
  $('.traffic-light-e .bulb:nth-child(2)').removeClass("yellow");
  $('.traffic-light-e .bulb:nth-child(1)').addClass("red");
};
function nLYellowToRed() {
  $('.traffic-light-n .bulb:nth-child(2)').removeClass("yellow");
  $('.traffic-light-n .bulb:nth-child(1)').addClass("red");
};
function sLYellowToRed() {
  $('.traffic-light-s .bulb:nth-child(2)').removeClass("yellow");
  $('.traffic-light-s .bulb:nth-child(1)').addClass("red");
};
function wLRedToGreen() {
  $('.traffic-light-w .bulb:nth-child(1)').removeClass("red");
  $('.traffic-light-w .bulb:nth-child(3)').addClass("green");
};
function eLRedToGreen() {
  $('.traffic-light-e .bulb:nth-child(1)').removeClass("red");
  $('.traffic-light-e .bulb:nth-child(3)').addClass("green");
};

var change_order = [
  ["RGLightInt", 4000],     // 4 mins 30s
  ["YLightInt",   1000],    // 30 s
];
var change_order_length = change_order.length;
var change_order_index = 0;

function trafficLightGroup(northLight, southLight, westLight, eastLight, change_order, change_order_length, change_order_index) {
  setTimeout(function () {
    if (northLight.status === "red" && westLight.status === "green") {
      westLight.greenToYellow();
      wLGreenToYellow();
      eastLight.greenToYellow();
      eLGreenToYellow();
      console.log("-------------------")
    } else if (northLight.status === "red" && westLight.status === "yellow") {
      northLight.redToGreen();
      nLRedToGreen();
      southLight.redToGreen();
      sLRedToGreen();
      westLight.yellowToRed();
      wLYellowToRed();
      eastLight.yellowToRed();
      eLYellowToRed();
    } else if (northLight.status === "green" && westLight.status === "red") {
      northLight.greenToYellow();
      nLGreenToYellow();
      southLight.greenToYellow();
      sLGreenToYellow();
    } else if (northLight.status === "yellow" && westLight.status === "red") {
      northLight.yellowToRed();
      nLYellowToRed();
      southLight.yellowToRed();
      sLYellowToRed();
      westLight.redToGreen();
      wLRedToGreen();
      eastLight.redToGreen();
      eLRedToGreen();
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


