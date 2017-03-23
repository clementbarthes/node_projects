var bonescriptObject = require('bonescript');

// Connect a button to this pin (no need to add a pull-down resistor)
var inputPin = 'P8_8';
bonescriptObject.pinMode(inputPin, bonescriptObject.INPUT);
bonescriptObject.attachInterrupt(inputPin, true, bonescriptObject.FALLING, interruptCallback);



function interruptCallback(x) {
    // Add the code that you want to execute when the button is pressed
    // For instance, you can display something in the console
}
