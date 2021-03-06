/*
 *  Note: to work, this package must have been installed by 'homestar install' 
 */

var iotdb = require("iotdb");
var _ = iotdb._;

var iot = iotdb.iot();
var things = iot.connect("SmartThingsSwitch");
things.on("state", function (thing) {
    console.log("+ state\n ", thing.thing_id(), "\n ", thing.state("istate"));
});
things.on("meta", function (thing) {
    console.log("+ meta\n ", thing.thing_id(), thing.state("meta"));
});
things.on("thing", function (thing) {
    console.log("+ discovered\n ", thing.thing_id(), thing.state("meta"));
});

var on = false;
var timer = setInterval(function () {
    things.set("on", on);
    on = !on;
}, 2500);
