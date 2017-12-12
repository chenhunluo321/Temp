
<html>
<header>
<style>
<?php include 'weather.css'; ?>
</style>
</header>
<?php
// Obtain a connection object by connecting to the db


$connection = @mysqli_connect (localhost, root, zhongjie, temp);

echo "<h2 id ='title'>Seneor Data</h2>";

if(mysqli_connect_errno())
{
echo "<h4>Failed to connect MySQL:
</h4>".mysqli_connect_error();
}

echo "<table border = '1' >
<tr>
<th>Time</th>
<th>Temp</th>
<th>Humidity</th>
<th>UV</th>
</tr>";
$query = "select * from store;";
$resultset = mysqli_query($connection,$query);
while ($row = mysqli_fetch_array($resultset)) {
  echo "<tr>";
  echo "<td>" . $row[0] . "</td>";
  echo "<td>" . $row[1] . "</td>";
  echo "<td>" . $row[2] . "</td>";
  echo "<td>" . $row[3] . "</td>";
  echo "</tr>";
}
echo"</table>";
?>
</html>

