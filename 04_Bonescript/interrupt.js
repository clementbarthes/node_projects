var bonescriptObject = require('bonescript');
var inputPin = 'P8_8';
bonescriptObject.pinMode(inputPin, bonescriptObject.INPUT);
bonescriptObject.attachInterrupt(inputPin, true, bonescriptObject.FALLING, interruptCallback);

function interruptCallback(x) {
    console.log("Interrupted on pin: " + inputPin);
}
