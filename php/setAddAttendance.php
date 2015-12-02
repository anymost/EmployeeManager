<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/20
 * Time: 18:28
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$userID = $_POST['userID'];
$date = $_POST['date'];
$status = $_POST['status'];

function addAttendance($userID, $date, $status)
{
    $conn = tools::connectDatabase();
    $check = 'bad';
    $data = array();
    $result = mysqli_query($conn, "SELECT * FROM Attendances WHERE EmployeeID=$userID");
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row['Date']);
    }
    for ($i = 0; $i < count($data); $i++) {
        if ($data[$i] == $date) {
            $check = "good";

        }
    }

    if ($check == "good") {
        echo "failed";

    } else {
        mysqli_query($conn, "INSERT INTO Attendances(EmployeeID,StatusID,Date) VALUES('$userID','$status','$date') ");
        echo "success";
    }
}

addAttendance($userID, $date, $status);