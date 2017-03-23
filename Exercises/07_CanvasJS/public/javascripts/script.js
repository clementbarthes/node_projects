
var socket = io(window.location.href);
var dpsX;
var chart;
window.onload = function(){ 
    dpsX = [];
    chart = new CanvasJS.Chart("chartContainer",{	
        axisY:{
        minimum: 0,
        maximum: 1,
        interval: .1
        },
        legend:{
            verticalAlign: "center",
            horizontalAlign: "right"}
    }); 
	chart.options.data = [
        {type: "line",
         color: "blue",
         markerType: "none",
         showInLegend: true,
         name: "X",
         dataPoints: dpsX}];
}

socket.on('data', function(analogRead){
    // You can draw on the plot by using:
    // dpsX.push({x:data_on_x_axis, y:data_on_y_axis});
    
    //Then call chart.render() to update the plot
    chart.render();	
    
    
    // Improvement: If you want your plot to act as a scope, you can use the shift
    // function to pop the old data out and push the new data in
    // if (dpsX.length > 400) {
    //         dpsX.shift();	
    //     }
});
