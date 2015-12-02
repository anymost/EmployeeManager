<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/21
 * Time: 9:36
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$roleName = $_POST['roleName'];

function checkSelectRole($roleName)
{
    $data = array();
    $data1 = array();
    $data2 = array();
    $conn = tools::connectDatabase();
    $result1 = mysqli_query($conn, "SELECT * FROM Roles WHERE RoleID='$roleName' ");
    $row1 = mysqli_fetch_array($result1);
    array_push($data, $row1);
    $result2 = mysqli_query($conn, "SELECT EmployeeID FROM UserRole WHERE RoleID='$roleName'");
    while ($row2 = mysqli_fetch_array($result2)) {
        array_push($data1, $row2['EmployeeID']);
    }
    for ($i = 0; $i < count($data1); $i++) {
        $employeeID = $data1[$i];
        $result3 = mysqli_query($conn, "SELECT * FROM Employees WHERE EmployeeID='$employeeID'");
        $row3 = mysqli_fetch_array($result3);
        array_push($data2, $row3);
    }
    array_push($data, $data2);
    echo json_encode($data);

}

checkSelectRole($roleName);
