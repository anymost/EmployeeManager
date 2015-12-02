<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 19:26
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$userID = $_POST['employee'];
$date = $_POST['date'];
$getResult = $_POST['result'];

function setAddReward($userID, $date, $getResult)
{
    $conn = tools::connectDatabase();
    $maxID = tools::getMaxRPID() + 1;
    $result = mysqli_query($conn, "SELECT * FROM RewardsAndPunishments WHERE EmployeeID='$userID' AND Date='$date'");
    $row = mysqli_fetch_array($result);
    if ($row) {
        echo "failed";
    } else {
        mysqli_query($conn, "INSERT INTO RewardsAndPunishments(RP_ID,EmployeeID,Type,Date) VALUES('$maxID','$userID','$getResult','$date')");
        echo "success";
    }

}

setAddReward($userID, $date, $getResult);