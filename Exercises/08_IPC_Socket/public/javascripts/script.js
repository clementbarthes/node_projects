
var socket = io(window.location.href);
var dpsX;
var chart;
window.onload = function(){ 
    dpsX = [];
    chart = new CanvasJS.Chart("chartContainer",{	
        axisY:{
        minimum: -2,
        maximum: 2,
        interval: .5
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

socket.on('data', function(accelData){
    for (var i=0; i<accelData.X.length; i++){
        dpsX.push({x:accelData.Time[i], y:accelData.Z[i]});
        
        if (dpsX.length > 400) {
            dpsX.shift();	
        }
    }
    chart.render();	
});
