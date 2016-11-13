<?php
    /**
    * Created by IntelliJ IDEA.
    * User: kevin
    * Date: 10/13/2016
    * Time: 5:03 PM
    */
            require_once('../php/mysqli_connect.php');
            $query= "SELECT * FROM MEAL";
            $response= mysqli_query($dbc, $query);
            if($response){
                while($row = mysqli_fetch_array($response)) {
                    echo "<option value=\"$row[Date]\"</option>";
                    echo '<tr><td align = "left">' .
                    $row['Date'] . '</td><td align = "left">';
                    echo '</tr>';
                }
            } else {
                 echo "Couldn't perform query";
                 echo mysqli_error($dbc);
            }

            $data = 1011011101110;
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
            $sandwich = substr($binStr, 10, 1);
            $simplytogo = substr($binStr, 11, 1);
            $dessert = substr($binStr, 12, 1);
            $date = date('Y-m-d');

            echo("$date$poultry$pork$fish$beef$bread$pasta$rice$potato$vegetable$fruit$sandwich$simplytogo$dessert");

            INSERT INTO MEAL (date)
            VALUES ($date, $poultry, $pork, $fish, $beef, $bread, $pasta, $rice, $potato, $vegetable,
            $fruit, $sandwich, $simplytogo, $dessert);

