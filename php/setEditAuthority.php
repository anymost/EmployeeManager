<?php

include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$employeeID=$_POST['employeeID'];
$data=$_POST['data'];


function setEditAuthority($employeeID,$data){
    $conn=tools::connectDatabase();
    for($i=0;$i<count($data);$i++){
        if($data[$i]['value']==1){
            $roleID=$data[$i]['roleID'];
            $result=mysqli_query($conn,"SELECT * FROM UserRole WHERE EmployeeID='$employeeID' AND RoleID='$roleID'");
            $row=mysqli_fetch_array($result);
            if(!$row){
                mysqli_query($conn,"INSERT INTO UserRole(EmployeeID,RoleID) VALUES('$employeeID','$roleID')");

            }

        }

    }


}
setEditAuthority($employeeID,$data);