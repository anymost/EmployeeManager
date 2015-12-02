<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/20
 * Time: 20:54
 */
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$type = $_POST['type'];
$employee = $_POST['employee'];

function setAddTrain($type, $employee)
{
    $conn = tools::connectDatabase();
    $result = mysqli_query($conn, "SELECT * FROM EmployeeTraining WHERE EmployeeID='$employee' AND TrainingID='$type'");
    $row = mysqli_fetch_array($result);
    if ($row) {
        echo "failed";
    } else {
        mysqli_query($conn, "INSERT INTO EmployeeTraining(TrainingID,EmployeeID) VALUES('$type','$employee')");
        echo "success";
    }
}

setAddTrain($type, $employee);