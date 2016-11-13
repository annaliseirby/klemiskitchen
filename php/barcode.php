<?php
/**
* Created by IntelliJ IDEA.
* User: kevin
* Date: 10/13/2016
* Time: 5:03 PM
*/
//    <A HREF = "../homepage.php">Home Page</A> </br>
//
//    <form action="barcode.php" method = "post">
//
//        require_once('../php/mysqli_connect.php');
//        $query= "SELECT * FROM MEAL";
//        $response= mysqli_query($dbc, $query);
//        if($response){
//            while($row = mysqli_fetch_array($response)) {
//                echo "<option value=\"$row[Date]\"</option>";
//                echo '<tr><td align = "left">' .
//                $row['Date'] . '</td><td align = "left">';
//                echo '</tr>';
//            }
//        } else {
//             echo "Couldn't perform query";
//             echo mysqli_error($dbc);
//        }

        $data = $_POST['data'];
        $binStr = strval($data);

        $poultry = substr($binStr, 0, 1);
        $pork = substr($binStr, 1, 1);
        $fish = substr($binStr, 2, 1);
        $beef = substr($binStr, 3, 1);
        $bread = substr($binStr, 4, 1);
        $pasta = substr($binStr, 5, 1);
        $rice = substr($binStr, 6, 1);
        $potato = substr($binStr, 7, 1);
        $vegetable = substr($binStr, 8, 1);
        $fruit = substr($binStr, 9, 1);
        $sandwhich = substr($binStr, 10, 1);
        $simplytogo = substr($binStr, 11, 1);
        $dessert = substr($binStr, 12, 1);
        $date = date('Y-m-d');

        echo("$date$poultry$pork$fish$beef$bread$pasta$rice$potato$vegetable$fruit$sandwhich$simplytogo$dessert");
        require_once('../php/mysqli_connect.php');

        $dbc= new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);
        $sql = 'INSERT INTO MEAL VALUES(intval($date), intval($poultry), intval($pork), intval($fish), intval($beef), intval($bread), intval($pasta),
            intval($rice), intval($potato), intval($vegetable), intval($fruit), intval($sandwhich), intval($simplytogo), intval($dessert), 1)';
        if ($dbc->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $dbc->error;
        }
        $dbc->close();
?>
