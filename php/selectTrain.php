<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/17
 * Time: 21:32
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();


function selectTrain()
{
    $conn = tools::connectDatabase();
    $data = array();
    $ID = array();
    $employeeCount = array();

    $result = mysqli_query($conn, "SELECT * FROM Training");
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row);
        array_push($ID, $row[0]);
    }

    for ($x = 0; $x < count($ID); $x++) {
        $newID = $ID[$x];
        $employeeCount[$newID] = 0;
    }


    $newResult = mysqli_query($conn, "SELECT * FROM EmployeeTraining");
    while ($newRow = mysqli_fetch_array($newResult)) {
        for ($i = 0; $i < count($ID); $i++) {
            if ($ID[$i] == $newRow['TrainingID']) {
                $newID = $ID[$i];
                $employeeCount[$newID]++;
            }
        }
    }

    for ($z = 0; $z < count($data); $z++) {
        $tempID = $data[$z]['TrainingID'];
        $data[$z]['count'] = $employeeCount[$tempID];
    }
    echo json_encode($data);


}

selectTrain();