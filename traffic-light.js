var async = require('async');

function traffic_light(direction) {
  this.direction = direction;
  var light_type = ["red", "yellow", "green"];
  this.status = light_type[0];
  var _self = this;

  var change_order = [
    ["RedToGreen", 30000],     // 5 mins
    ["GreenToYellow", 27000],  // 4 mins 30 s
    ["YellowToRed", 3000]      // 30 seconds
  ];

  var change_order_length = change_order.length;

  this.redToGreen = function (cb) {
    if (this.status === "red") {
      this.status = light_type[2];
      console.log("success: the light status is " + this.status);
    } else {
      console.log("error: the light status is not red");
    };

  };

  this.greenToYellow = function () {
    if (this.status == "green") {
      this.status = light_type[1];
      console.log("success: the light status is " + this.status);
    } else {
      console.log("error: the light status is not green");
    };
  };

  this.yellowToRed = function () {
    if (this.status == "yellow") {
      this.status = light_type[0];
      console.log("success: the light status is " + this.status);
    } else {
      console.log("error: the light status is not yellow");
    };
  };

  // this.traffic_light_loop = function () {
  //   console.log(this.status);
  //   setTimeout(function () {
  //     _self.redToGreen();
  //     console.log(_self.status);
  //
  //     setTimeout(function () {
  //       _self.greenToYellow();
  //       console.log(_self.status);
  //
  //       setTimeout(function () {
  //         _self.yellowToRed()
  //         console.log(_self.status);
  //
  //       }, 3000);
  //     }, 3000);
  //   }, 3000);
  // }

  this.traffic_light_loop = function () {
    console.log("------------");
    console.log(this.status);
    console.log(this);
    console.log(_self);
    console.log("------------");
    setTimeout(function () {
      if(_self.status === "red") {
        _self.redToGreen();
      } else if (_self.status === "green") {
        _self.greenToYellow()
      } else if (_self.status === "yellow") {
        _self.yellowToRed()
      }
      _self.traffic_light_loop();
    }, 3000);
  }

};



var northLight = new traffic_light("north");
var southLight = new traffic_light("south");
var westLight = new traffic_light("west");
var eastLight = new traffic_light("east");


northLight.traffic_light_loop();


// async.auto({
//   redToGreenAsync: function (callback, results) {
//     console.log("current status is : " + northLight.status);
//     setTimeout(northLight.redToGreen.bind(northLight), 3000);
//     callback(null, 'success');
//   },
//   greenToYellowAsync: ['redToGreenAsync', function (callback, results) {
//     console.log(results);
//     console.log("current status is : " + northLight.status);
//     setTimeout(northLight.greenToYellow.bind(northLight), 3000);
//   }],
//   yellowToRedAsync: ['greenToYellowAsync', function (callback) {
//     console.log("current status is : " + northLight.status);
//     setTimeout(northLight.yellowToRed.bind(northLight), 3000);
//     callback(null, "success3");
//   }]
//
// }, function (err, results) {
//
// });


