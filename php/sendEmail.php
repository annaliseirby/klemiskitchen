<?php
/**
 * Created by IntelliJ IDEA.
 * User: kevin
 * Date: 11/11/2016
 * Time: 5:41 PM
 */
$from = $_POST["email"];
$subject = "New Klemis Kitchen Application";
$msg = $_POST["message"];
$msg = wordwrap($msg,70);
$headers = "From: " . $from;

echo ($from + "\n" + $subject + "\n" + $msg + "\n" + $headers);
//mail("rtech153@gmail.com", $subject, $msg, $headers);

