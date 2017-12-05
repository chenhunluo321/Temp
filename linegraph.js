
$(document).ready(function(){
	$.ajax({
		url : "http://localhost/graph.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var id = [];
			var name =[];
			var qty = [];
			var price =[];
			for (var i in data){
				id.push("Time" + data[i].id);
				name.push(data[i].name);
				qty.push(data[i].qty);
				price.push(data[i].price);
			}
			var chartdata = {
				labels: id,
				datasets: [
				{
					label: "temperature",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(59, 89, 152, 0.75)",
					borderColor: "rgba(59, 89, 152, 1)",
					pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
					pointHoverBorderColor: "rgba(59, 89, 152, 1)",
					data: name
				},
				{
					label: "humidity",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(29, 202, 255, 0.75)",
					borderColor: "rgba(29, 202, 255, 1)",
					pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
					pointHoverBorderColor: "rgba(29, 202, 255, 1)",
					data: qty
				},
				{
					label: "UV",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(211, 72, 54, 0.75)",
					borderColor: "rgba(211, 72, 54, 1)",
					pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
					pointHoverBorderColor: "rgba(211, 72, 54, 1)",
					data: price
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