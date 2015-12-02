<?php
include_once("tools.php");
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/15
 * Time: 19:46
 */
$userID = $_POST['userID'];
$year = $_POST['year'];
$month = $_POST['month'];
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();


function getTrainInformation($userID, $year, $month)
{
    $conn = tools::connectDatabase();
    $data = array();
    $date = array();
    $result = mysqli_query($conn, "SELECT TrainingID FROM EmployeeTraining WHERE EmployeeID='$userID'");
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row['TrainingID']);
    }
    for ($i = 0; $i < count($data); $i++) {
        $newResult1 = mysqli_query($conn, "SELECT BeginDate FROM Training WHERE TrainingID='$data[$i]'");
        while ($newRow = mysqli_fetch_array($newResult1)) {
            $temp1 = explode("-", $newRow['BeginDate']);
            if ($temp1[0] == $year && $temp1[1] == $month) {

                $newResult2 = mysqli_query($conn, "SELECT * FROM Training WHERE TrainingID='$data[$i]'");
                while ($temp2 = mysqli_fetch_array($newResult2)) {
                    array_push($date, $temp2);
                }

            }

        }
    }
    echo json_encode($date);

}

getTrainInformation($userID, $year, $month);