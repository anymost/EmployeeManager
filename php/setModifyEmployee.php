<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/17
 * Time: 11:58
 */
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();


$userID = $_POST['userID'];
$employeeName = $_POST['employeeName'];
$sex = $_POST['sex'];
$phone = $_POST['phone'];
$birthDay = $_POST['birthDay'];
$degreeID = $_POST['degreeID'];
$departmentID = $_POST['departmentID'];
$title = $_POST['title'];
$salary = $_POST['salary'];
$employeeTypeID = $_POST['employeeTypeID'];
$hireDate = $_POST['hireDate'];


function setModifyEmployee($userID, $employeeName, $sex, $phone, $birthDay, $degreeID, $departmentID, $title, $salary, $employeeTypeID, $hireDate)
{
    $conn = tools::connectDatabase();
    try {
        mysqli_query($conn, "UPDATE Employees SET EmployeeName='$employeeName',SEX='$sex',Phone='$phone',BirthDay='$birthDay',DegreeID='$degreeID',DepartmentID='$departmentID',Title='$title',Salary='$salary',EmployeeTypeID='$employeeTypeID',HireDate='$hireDate' WHERE EmployeeID='$userID' ");
    } catch (Exception $e) {
        echo $e->getMessage();
    }


    echo "success";
}

setModifyEmployee($userID, $employeeName, $sex, $phone, $birthDay, $degreeID, $departmentID, $title, $salary, $employeeTypeID, $hireDate);