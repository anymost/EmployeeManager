<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/17
 * Time: 16:53
 */
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$userID = $_POST['userID'];

function setDeleteEmployee($userID)
{
    $conn = tools::connectDatabase();
    try {
        mysqli_query($conn, "DELETE FROM Employees WHERE EmployeeID=$userID");
    } catch (Exception $e) {
        echo $e->getMessage();
    }
    echo "success";
}

setDeleteEmployee($userID);