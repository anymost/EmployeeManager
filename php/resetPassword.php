<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/26
 * Time: 17:50
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$employeeID=$_POST['employeeID'];

//在重置密码时，将重置的密码加密后保存到数据库中
$newPassword=sha1($_POST['newPassword']);

function resetPassword($employeeID,$newPassword){

    $conn=tools::connectDatabase();
    mysqli_query($conn,"UPDATE Users SET Password='$newPassword' WHERE EmployeeID='$employeeID'");
    echo "success";
}
resetPassword($employeeID,$newPassword);