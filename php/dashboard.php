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

//Only Poultry
$query4 = "SELECT SUM(NumMeals) FROM MEAL WHERE Poultry = 1 AND Pork = 0 AND Beef = 0 AND Fish = 0";
$result4 = mysqli_query($dbc, $query4);
if ($result4) {
    while ($row4 = mysqli_fetch_array($result4)) {
        $array[] = $row4[0];
    }
} else {
    echo mysqli_error();
}

//Only Pork
$query5 = "SELECT SUM(NumMeals) FROM MEAL WHERE Poultry = 0 AND Pork = 1 AND Beef = 0 AND Fish = 0";
$result5 = mysqli_query($dbc, $query5);
if ($result5) {
    while ($row5 = mysqli_fetch_array($result5)) {
        $array[] = $row5[0];
    }
} else {
    echo mysqli_error();
}

//Only Beef
$query6 = "SELECT SUM(NumMeals) FROM MEAL WHERE Poultry = 0 AND Pork = 0 AND Beef = 1 AND Fish = 0";
$result6 = mysqli_query($dbc, $query6);
if ($result6) {
    while ($row6 = mysqli_fetch_array($result6)) {
        $array[] = $row6[0];
    }
} else {
    echo mysqli_error();
}

//Only Fish
$query7 = "SELECT SUM(NumMeals) FROM MEAL WHERE Poultry = 0 AND Pork = 0 AND Beef = 0 AND Fish = 1";
$result7 = mysqli_query($dbc, $query7);
if ($result7) {
    while ($row7 = mysqli_fetch_array($result7)) {
        $array[] = $row7[0];
    }
} else {
    echo mysqli_error();
}

//Multi-meat
$query8 = "SELECT SUM(NumMeals) FROM MEAL WHERE Poultry + Pork + Beef + Fish > 1;";
$result8 = mysqli_query($dbc, $query8);
if ($result8) {
    while ($row8 = mysqli_fetch_array($result8)) {
        $array[] = $row8[0];
    }
} else {
    echo mysqli_error();
}

//No meat
$query9 = "SELECT SUM(NumMeals) FROM MEAL WHERE Poultry + Pork + Beef + Fish = 0;";
$result9 = mysqli_query($dbc, $query9);
if ($result9) {
    while ($row9 = mysqli_fetch_array($result9)) {
        $array[] = $row9[0];
    }
} else {
    echo mysqli_error();
}

echo json_encode($array);

mysqli_close($dbc);