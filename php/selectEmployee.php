<?php
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/16
 * Time: 20:45
 */
$employeeName = $_POST['employeeName'];
$sex = $_POST['sex'];
$departmentID = $_POST['departmentID'];
$title = $_POST['title'];
$employeeTypeID = $_POST['employeeTypeID'];
$sql = "SELECT * FROM Employees WHERE 1=1";
$data = array();
if ($sex != '不限') {
    $sql .= " AND Sex='$sex'";
}
if (isset($employeeName) && !empty($employeeName)) {
    $sql .= " AND EmployeeName='$employeeName'";
}
if ($departmentID != '6') {
    $sql .= " AND DepartmentID='$departmentID'";
}
if (isset($title) && !empty($title)) {
    $sql .= " AND Title=$title";
}
if ($employeeTypeID != '3') {
    $sql .= " AND EmployeeTypeID='$employeeTypeID'";
}

function  selectEmployee($sql)
{
    $conn = tools::connectDatabase();
    $data = array();
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);
}

selectEmployee($sql);