
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
    for (var i=0; i<analogRead.X.length; i++){
        dpsX.push({x:analogRead.X[i], y:analogRead.Y[i]});
        
        if (dpsX.length > 400) {
            dpsX.shift();	
        }
    }
    chart.render();	
});
