<?php
/**
 * Created by IntelliJ IDEA.
 * User: Jacob
 * Date: 11/14/2016
 * Time: 7:02 PM
 */
$DB_USER = 'klemiss2';
$DB_PASSWORD = 'klemis2017';
$DB_HOST = 'localhost';
$DB_NAME = 'drux_s2klemi';
$dbc = new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);

$query = "SELECT * FROM MEAL";
$response = mysqli_query($dbc, $query);
if ($response) {
    $encode = array();
    while ($row = mysqli_fetch_assoc($response)) {
        $encode[] = $row;
    }
    echo json_encode($encode);
} else {
    echo "Couldn't perform query";
    echo mysqli_error($dbc);
}
mysqli_close($dbc);

?>