<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 11:03
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$trainingID = $_POST['trainingID'];
$startDate = $_POST['startDate'];
$endDate = $_POST['endDate'];
$trainType = $_POST['trainType'];
$trainDescription = $_POST['trainDescription'];

function editTrain($trainingID, $startDate, $endDate, $trainType, $trainDescription)
{
    $conn = tools::connectDatabase();
    try {
        mysqli_query($conn, "UPDATE Training SET BeginDate='$startDate',EndDate='$endDate',TrainingType='$trainType',Description='$trainDescription' WHERE TrainingID='$trainingID' ");
    } catch (Exception $e) {
        $e->getMessage();
    }
    echo "success";
}

editTrain($trainingID, $startDate, $endDate, $trainType, $trainDescription);