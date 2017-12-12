
$(document).ready(function(){
	$.ajax({
		url : "http://localhost/graph.php",
		type : "GET",
		success : function(data){
			// console.log(data);

			var datapoint = [];
			var temperature =[];
			var humidity = [];
			var light =[];
			for (var i in data){
				datapoint.push("Time" + data[i].datapoint);
				temperature.push(data[i].temperature);
				humidity.push(data[i].humidity);
				light.push(data[i].light);

			}
			var chartdata = {
				labels: datapoint,
				datasets: [
				{
					label: "temperature",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(59, 89, 152, 0.75)",
					borderColor: "rgba(59, 89, 152, 1)",
					pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
					pointHoverBorderColor: "rgba(59, 89, 152, 1)",
					data: temperature
				},
				{
					label: "humidity",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(29, 202, 255, 0.75)",
					borderColor: "rgba(29, 202, 255, 1)",
					pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
					pointHoverBorderColor: "rgba(29, 202, 255, 1)",
					data: humidity
				},
				{
					label: "UV",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(211, 72, 54, 0.75)",
					borderColor: "rgba(211, 72, 54, 1)",
					pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
					pointHoverBorderColor: "rgba(211, 72, 54, 1)",
					data: light
				}
				]
			};
			var ctx = $("#mycanvas");
			var LineGraph = new Chart(ctx,{
				type: 'line',
				data: chartdata
			});
		},
		error : function(data) {

		}
	});
});