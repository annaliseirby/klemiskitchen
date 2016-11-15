<?php
/**
 * Created by IntelliJ IDEA.
 * User: kevin
 * Date: 11/15/2016
 * Time: 3:34 PM
 */
//require_once('../php/mysqli_connect.php');
$DB_USER = 'klemiss2';
$DB_PASSWORD = 'klemis2017';
$DB_HOST = 'localhost';
$DB_NAME = 'drux_s2klemi';
$dbc = new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);
$array = [];
//Create array for return


//First query -> Returns total meals
$query = "SELECT SUM(NumMeals) FROM MEAL";
$result = mysqli_query($dbc, $query);
if ($result) {
    while ($row = mysqli_fetch_array($result)) {
        $array[] =  $row[0];
    }
} else {
    echo mysqli_error();
}

//Second query -> Returns meals added this week : FIRST DAY IS SUNDAY
$query2 = "SELECT SUM(NumMeals) FROM MEAL WHERE YEARWEEK(Date)=YEARWEEK(NOW())";
$result2 = mysqli_query($dbc, $query2);
if ($result2) {
    while ($row2 = mysqli_fetch_array($result2)) {
        $array[] = $row2[0];
    }
} else {
    echo mysqli_error();
}

//Third query -> Returns expired meals
$query3 = "SELECT SUM(NumMeals) FROM MEAL WHERE NOW() >= DATE + INTERVAL 14 DAY;";
$result3 = mysqli_query($dbc, $query3);
if ($result3) {
    while ($row3 = mysqli_fetch_array($result3)) {
        $array[] = $row3[0];
    }
} else {
    echo mysqli_error();
}

echo json_encode($array);

mysqli_close($dbc);