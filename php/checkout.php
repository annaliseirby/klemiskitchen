<?php
/**
 * Created by IntelliJ IDEA.
 * User: kevin
 * Date: 10/13/2016
 * Time: 5:03 PM
 */

$data = $_POST['data'];
$date = $_POST['date'];

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

//This is supposed to decrement. If it doesn't collide, assume that there was human error during input and ignore
$sql = "INSERT INTO MEAL VALUES('$date', $poultry, $pork, $fish, $beef, $bread, $pasta,
              $rice, $potato, $vegetable, $fruit, $sandwhich, $simplytogo, $dessert, 0) ON DUPLICATE KEY UPDATE
              NumMeals = NumMeals - 1";
$dbc->query($sql);

//This checks for numMeal = 0s and deletes
$deleter = "DELETE FROM MEAL WHERE NumMeals <= 0";
$dbc->query($deleter);
$dbc->close();
?>