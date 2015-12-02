<?php
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/16
 * Time: 10:34
 */
$userID = $_POST['userID'];
$year = $_POST['year'];
$month = $_POST['month'];


function getAttendanceInformation($userID, $year, $month)
{
    $conn = tools::connectDatabase();
    $data = array();
    $result = mysqli_query($conn, "SELECT * FROM Attendances WHERE EmployeeID='$userID'");
    while ($row = mysqli_fetch_array($result)) {
        $temp = explode('-', $row['Date']);
        if ($temp[0] == $year && $temp[1] == $month) {
            array_push($data, $row);
        }
    }

    echo json_encode($data);
}

getAttendanceInformation($userID, $year, $month);