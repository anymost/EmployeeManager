<?php
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/17
 * Time: 11:57
 */

function  getModifyEmployee()
{
    $conn = tools::connectDatabase();
    $result = mysqli_query($conn, "SELECT EmployeeID,EmployeeName From Employees");
    $data = array();
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);
}

getModifyEmployee();