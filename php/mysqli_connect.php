<?php

DEFINE ('DB_USER', 'klemiss2');
DEFINE ('DB_PASSWORD', 'klemis2017');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'drux_s2klemi');

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR die('Could not connect to MySQL' .
	mysqli_connect_error());

?>