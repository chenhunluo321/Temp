<?php
//setting header to json
header('Content-Type: application/json');
//get connection
$connection = @mysqli_connect (localhost, root, zhongjie, audrinodata);
if(!$connection){
	die("Connection failed: " . $connection->error);
}

//query to get data from the table
$query = sprintf("SELECT datapoint, temperature, humidity, light FROM sensordata");
//execute query
$resultset = $connection->query($query);
//loop through the returned data
$data = array();
foreach ($resultset as $row) {
	$data[] = $row;
}

//free memory associated with result
$resultset->close();

//close connection
$connection->close();

//now print the data
print json_encode($data);
?>