<?php
/**
 * Created by IntelliJ IDEA.
 * User: kevin
 * Date: 10/13/2016
 * Time: 5:03 PM
 */
    <A HREF = "../homepage.php">Home Page</A> </br>

    <form action="barcode.php" method = "post">

    <?php
        require_once('../mysqli_connect.php');
        $query= "SELECT * FROM MEALS";
        $response= mysqli_query($dbc, $query);
        while($row = mysqli_fetch_array($response)) {
            echo "<option value=\"$row[Date]\"</option>";
            echo '<tr><td align = left">' .
            $row['Date'] . '</td><td align = "left">';
            echo '</tr>';
        } else {
             echo "Couldn't perform query";
             echo mysqli_error($dbc);
        }

    ?>
>
