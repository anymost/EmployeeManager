<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/25
 * Time: 19:24
 */

include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$employeeID=$_POST['employeeName'];

function checkEditAuthority($employeeID){
    $conn=tools::connectDatabase();
    $roleIDs=array();
    $data=array();
    $role=array();
    $result=mysqli_query($conn,"SELECT RoleID FROM UserRole WHERE EmployeeID='$employeeID'");
    while($row=mysqli_fetch_array($result)){
        array_push($roleIDs,$row['RoleID']);
    }
    $result=mysqli_query($conn,"SELECT * FROM Roles");
    while($row=mysqli_fetch_array($result)){
        for($i=0;$i<count($roleIDs);$i++){
            if($row['RoleID']==$roleIDs[$i]){
                array_push($role,$row);
            }
        }
        array_push($data,$row);
    }
    array_push($data,$role);
    echo json_encode($data);

}
checkEditAuthority($employeeID);