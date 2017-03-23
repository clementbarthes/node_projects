var bonescriptObject = require('bonescript');

// This is the input pin for the ADC
var inputPin = "P9_39";


// This function will call the analogRead function every 100ms. You can change the 
// sampling rate here
setInterval(analogRead,100);

function analogRead(){
    // You can read the ADC value using the function:
    // bonescriptObject.analogRead(inputPin);
    // You should assign it to a variable and display it in the Node console
    // You can multiply the output by 1800 to convert to mV
}