<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/22
 * Time: 19:04
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$roleID=$_POST['roleID'];
$authority=$_POST['authority'];

function setEditRole($roleID,$authority){
    $conn=tools::connectDatabase();
    $roleAuthority=$authority[0];
    $roleInfo=$authority[1];
    $roleJob=$authority[2];
    $roleAttendance=$authority[3];
    $roleTraining=$authority[4];
    $roleEvaluation=$authority[5];
    $roleRP=$authority[6];
    $roleRole=$authority[7];
    $roleEncrypt=$authority[8];
    mysqli_query($conn,"UPDATE Roles SET Auth_Authority='$roleAuthority',Auth_Info='$roleInfo',Auth_Job='$roleJob',Auth_Attendance='$roleAttendance',Auth_Training='$roleTraining',Auth_Evaluation='$roleEvaluation',Auth_RP='$roleRP',Auth_Role='$roleRole',Auth_Encrypt='$roleEncrypt' WHERE RoleID=$roleID");
    echo "success";

}
setEditRole($roleID,$authority);