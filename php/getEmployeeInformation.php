<?php

/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/15
 * Time: 16:13
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();


$userID = $_POST['userID'];


function getEmployeeInformation($userID)
{
    $conn = tools::connectDatabase();
    $result = mysqli_query($conn, "SELECT * FROM Employees WHERE EmployeeID='$userID'");
    while ($row = mysqli_fetch_array($result)) {
        echo json_encode($row);
    }

}

getEmployeeInformation($userID);