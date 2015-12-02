<?php
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/16
 * Time: 10:05
 */
$userID = $_POST['userID'];
$year = $_POST['year'];
$month = $_POST['month'];


function getCheckInformation($userID, $year, $month)
{
    $conn = tools::connectDatabase();
    $data = array();
    $date = array();
    $result = mysqli_query($conn, "SELECT EvaluationID FROM Evaluations WHERE EmployeeID='$userID'");
    while ($row = mysqli_fetch_array($result)) {
        array_push($date, $row['EvaluationID']);
    }
    for ($i = 0; $i < count($date); $i++) {
        $newResult1 = mysqli_query($conn, "SELECT Date FROM Evaluations WHERE EvaluationID='$date[$i]'");
        while ($newRow = mysqli_fetch_array($newResult1)) {
            $temp1 = explode("-", $newRow['Date']);
            if ($temp1[0] == $year && $temp1[1] == $month) {

                $newResult2 = mysqli_query($conn, "SELECT * FROM Evaluations WHERE EvaluationID='$date[$i]'");
                while ($temp2 = mysqli_fetch_array($newResult2)) {
                    array_push($data, $temp2);
                }

            }

        }
    }
    echo json_encode($data);
}

getCheckInformation($userID, $year, $month);