<?php
/**
 * Created by IntelliJ IDEA.
 * User: kevin
 * Date: 10/13/2016
 * Time: 5:03 PM
 */

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

$DB_USER = 'klemiss2';
$DB_PASSWORD = 'klemis2017';
$DB_HOST = 'localhost';
$DB_NAME = 'drux_s2klemi';
$dbc = new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);
$sql1 = "SELECT EXISTS(SELECT * FROM MEAL WITH VALUE WHERE Date = now() AND Poultry = $poultry AND Pork = $pork AND Fish = $fish
  AND Beef = $beef AND Pasta = $pasta AND Rice = $rice AND Potato = $Potato AND Vegetable = $vegetable
  AND Fruit = $fruit AND Sandwhich $sandwhich AND SimplyToGo = $simplytogo AND Dessert = $Dessert)";
if(mysqli_result($sql1, 0) == 1) {
    $sql2 = "UPDATE MEAL SET NumMeals = (SELECT NumMeals FROM MEAL WITH VALUE WHERE Date = now() AND Poultry = $poultry AND Pork = $pork AND Fish = $fish
          AND Beef = $beef AND Pasta = $pasta AND Rice = $rice AND Potato = $Potato AND Vegetable = $vegetable
          AND Fruit = $fruit AND Sandwhich $sandwhich AND SimplyToGo = $simplytogo AND Dessert = $Dessert) + 1
          WHERE Date = now() AND Poultry = $poultry AND Pork = $pork AND Fish = $fish
          AND Beef = $beef AND Pasta = $pasta AND Rice = $rice AND Potato = $Potato AND Vegetable = $vegetable
          AND Fruit = $fruit AND Sandwhich $sandwhich AND SimplyToGo = $simplytogo AND Dessert = $Dessert";
        if ($conn->query($sql2) === TRUE) {
                echo "Record updated successfully";
        } else {
                echo "Error updating record: " . $conn->error;
        }
} else {
        $sql = "INSERT INTO MEAL VALUES(now(), $poultry, $pork, $fish, $beef, $bread, $pasta,
              $rice, $potato, $vegetable, $fruit, $sandwhich, $simplytogo, $dessert, 1)";
        if ($dbc->query($sql) === TRUE) {
                echo "New record created successfully";
        } else {
                echo "Error: " . $sql . "<br>" . $dbc->error;
        }
}
$dbc->close();
?>
