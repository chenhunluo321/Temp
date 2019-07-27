<p align="center">
  <a href="" rel="noopener">
<a href="https://ibb.co/M65kGpB"><img width = "250" height = "200" src="https://i.ibb.co/WtpvPFV/Screen-Shot-2019-07-26-at-6-42-51-PM.png" alt="Screen-Shot-2019-07-26-at-6-42-51-PM" border="0"></a>
</p>

<h3 align="center">Temperature Monitoring System</h3>

<div align="center">

  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square">
  <img src="https://img.shields.io/badge/downloads-0k-yellow.svg?style=flat-square">
  <img src="https://img.shields.io/badge/build-passing-yellow.svg?style=flat-square">

</div>

---

<p align="center"> 
    <br> 
</p>



## 🧐 About <a name = "about"></a>
Our project is collecting sensor data like temperature, humidity, and light from the audrino device and then send to the database. User can view the data table and data graph from the web page.
audrinosensor.ino is the code file for running audrino and collecting data. data.php load the data from the database and display the chart on the webpage. graph.php file displaying the data from the database as a line graph.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
You will need an Arduino HardWare with an ethernet shield

Any Operating systems that are capable of running local host


### Installing

### Setting Up Arduino:


1. Download an Arduino IDE

2. Open the IDE and connect your Arduino device with your computer

3. Running the file audrinosensor.ino


### Setting Up Local host:

1. Go to the Apache Friends website and download XAMPP for your operating system

2. Start the XAMPP program and click on the "Start" button next to "Apache" to start your Apache Web server.

3. Place all html, js, css, php files in the "HTDocs" folder located under the "XAMMP" folder

4. Open up any Web browser and enter "localhost" into the address box and open data.php

## ⛏️ Built Using <a name = "built_using"></a>
- [Arduino](https://www.arduino.cc/) - HardWare
- [XAMPP](https://www.apachefriends.org/index.html) - Server Framework
- [MySQL](https://dev.mysql.com/doc/index-connectors.html) - Database
- [CSS, HTML, JS, PHP] - Programming Language

