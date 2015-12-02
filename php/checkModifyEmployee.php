<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/17
 * Time: 12:30
 */

include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$userID = $_POST['userID'];


function checkModifyEmployee($userID)
{
    $conn = tools::connectDatabase();
    $data = array();
    $result = mysqli_query($conn, "SELECT * FROM Employees WHERE EmployeeID='$userID' ");
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);
}

checkModifyEmployee($userID);