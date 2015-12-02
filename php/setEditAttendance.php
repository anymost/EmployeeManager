<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/17
 * Time: 19:46
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();




$userID = $_POST['userID'];
$data = $_POST['data'];

function setEditAttendance($userID, $data)
{
    $conn = tools::connectDatabase();
    for ($i = 0; $i < count($data); $i++) {
        try {
            $date = $data[$i][0];
            $status = $data[$i][1];
            mysqli_query($conn, "UPDATE Attendances SET StatusID='$status' WHERE EmployeeID='$userID' AND Date='$date'");

        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
    echo "success";
}

setEditAttendance($userID, $data);