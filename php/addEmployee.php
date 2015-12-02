<?php
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/16
 * Time: 19:39
 */
$name = $_POST['employeeName'];
$sex = $_POST['sex'];
$phone = $_POST['phone'];
$birthDay = $_POST['birthDay'];
$degreeID = $_POST['degreeID'];
$departmentID = $_POST['departmentID'];
$title = $_POST['title'];
$salary = $_POST['salary'];
$employeeTypeID = $_POST['employeeTypeID'];
$hireDate = $_POST['hireDate'];


function addEmployee($name, $sex, $phone, $birthDay, $degreeID, $departmentID, $title, $salary, $employeeTypeID, $hireDate)
{
    $conn = tools::connectDatabase();
    $ID = tools::getMaxEmployeeID() + 1;
    try {
        mysqli_query($conn, "INSERT INTO Employees(EmployeeID,EmployeeName,Sex,BirthDay,Phone,DegreeID,HireDate,EmployeeTypeID,DepartmentID,Title,Salary,ManagerID) VALUES ('$ID','$name','$sex','$birthDay','$phone','$degreeID','$hireDate','$employeeTypeID','$departmentID','$title','$salary','53130301'); ");
    } catch (Exception $e) {
        echo $e->getMessage();
    }
    echo "success";
}

addEmployee($name, $sex, $phone, $birthDay, $degreeID, $departmentID, $title, $salary, $employeeTypeID, $hireDate);