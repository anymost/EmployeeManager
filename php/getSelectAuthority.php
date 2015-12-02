<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 21:27
 */

include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$authority = $_POST['authority'];

function selectAuthority($authority)
{

    $conn = tools::connectDatabase();
    $allData = array();
    $employeeID=array();
    $result = mysqli_query($conn, "SELECT RoleID,RoleName FROM Roles WHERE $authority='1' ");
    while ($row = mysqli_fetch_array($result)) {
        array_push($allData,array('roleID'=>$row['RoleID'],'roleName'=>$row['RoleName']));
    }

    for($i=0;$i<count($allData);$i++){
        $roleID=$allData[$i]["roleID"];
        $result=mysqli_query($conn,"SELECT EmployeeID FROM UserRole WHERE RoleID='$roleID'");
        while($row=mysqli_fetch_array($result)){
            array_push($employeeID,$row['EmployeeID']);
        }
    }

    $employee=array();
    for($i=0;$i<count($employeeID);$i++){
        $id=$employeeID[$i];
        $result=mysqli_query($conn,"SELECT EmployeeID,EmployeeName,DepartmentID,Title From Employees WHERE EmployeeID='$id'");
        while($row=mysqli_fetch_array($result)){
            array_push($employee,$row);
        }
    }
    array_push($allData,$employee);

    echo json_encode($allData);


}

selectAuthority($authority);