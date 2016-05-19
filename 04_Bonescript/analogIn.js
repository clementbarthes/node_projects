var bonescriptObject = require('bonescript');

var inputPin = "P9_39";

setInterval(analogRead,100);

function analogRead(){
    var value = bonescriptObject.analogRead(inputPin);
    console.log('Analog readout is: ' + value*1800 + ' mV');
}