<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/20
 * Time: 21:25
 */

include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$type = $_POST['type'];
$employee = $_POST['employee'];
$date = $_POST['date'];
$getResult = $_POST['result'];

function addEvaluation($type, $employee, $date, $getResult)
{

    $conn = tools::connectDatabase();
    $maxID = tools::getMaxEvaluationID() + 1;
    $result = mysqli_query($conn, "SELECT * FROM  Evaluations WHERE EmployeeID='$employee' AND EvaluationProjectID='$type' AND Date='$date'");
    $row = mysqli_fetch_array($result);
    if ($row) {
        echo "failed";
    } else {
        mysqli_query($conn, "INSERT INTO Evaluations(EvaluationID,EmployeeID,EvaluationProjectID,Date,Result) VALUES('$maxID','$employee','$type','$date','$getResult')");
        echo "success";
    }
}

addEvaluation($type, $employee, $date, $getResult);